const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(URL, callback) {
    fetch(URL)
        .then((request) => {
            return request.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback(false);
            console.log(error);
        })
}

Vue.component('goods-search-box', {
    template: `
    <div class="goods-search-box">
        <input type="text" class="goods-search" v-model="searchLine">
        <button class="cart-button" type="button" v-on:click="FilterGoods">Искать</button>
    </div>
        `,
    data() {
        return {
            searchLine: ''
        }
    },
    methods: {
        FilterGoods() {
            this.$emit('filter', this.searchLine);
        }
    }
});

Vue.component('connect-error', {
    template: `
    <div class="connect-error">
      <h3>Ошибка соединения</h3>
      <p class="error-code">{{message}}</p>
      <p class="error-message">Попробуйте позже</p>
      <button class="cart-button" type="button" v-on:click="showError">X</button>
    </div>`,
    props: ['message'],
    methods: {
        showError() {
            this.$emit('error')
        }
    }
})

Vue.component('cart-list', {
    template: `
    <div class="container cart-list">
    <template v-if="this.list.length > 0">
      <div class="cart-item" v-for="cartItem of list" v-bind:key="cartItem.id_product">
        <h3>{{cartItem.product_name}}</h3>
        <p>{{cartItem.price}} руб.</p>
        <p>{{cartItem.quantity}} шт.</p>
        <button v-on:click="removeItem(cartItem)">X</button>
      </div>
      <hr>
      <div class="cart-item">
        <h3>ИТОГО: </h3>
        <p>{{sum.amount}} руб.</p>
        <p>{{sum.countGoods}} шт.</p>
      </div>
    </template>
    <template v-else>
      <h3>Корзина пуста</h3>
    </template>
  </div>
    `,
    props: ['list', 'sum'],
    methods: {
        removeItem(cartItem) {
            this.$emit('remove', cartItem)
        },
        onVisible() {
            this.$emit('visible')
        }
    }
});

new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        cartList: [],
        searchLine: '',
        isVisibleCart: false,
        isVisibleError: false,
        isVisibleErroMessage: "Нет соединения с сервером",
        sumInfo: [{
                amount: 0
            },
            {
                countGoods: 0
            }
        ],
    },
    methods: {
        fetchGoods() {
            makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                if (goods) {
                    return this.goods = this.filteredGoods = goods;
                }
                this.isVisibleError = !goods;
                this.isVisibleErroMessage = "Не удается загрузить товары";
            });
        },
        loadCart() {
            makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
                if (goods) {
                    this.cartList = goods.contents;
                    this.sumGoods();
                } else {
                    this.isVisibleError = !goods;
                    this.isVisibleErroMessage = "Не удается загрузить корзину";
                }
            });
        },
        sumGoods() {
            let amountSum = 0;
            let countGoodsSum = 0;
            this.cartList.map(good => good.quantity).forEach((item) => {
                countGoodsSum = countGoodsSum + item;
            });
            this.cartList.map(good => good.price * good.quantity).forEach((item) => {
                amountSum = amountSum + item;
            });
            this.sumInfo.amount = amountSum;
            this.sumInfo.countGoods = countGoodsSum;
        },
        FilterGoods(searchLine) {
            let reg = new RegExp(searchLine, 'i');
            this.filteredGoods = this.goods.filter((good) => reg.test(good.product_name));
        },
        showCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        showError() {
            this.isVisibleError = !this.isVisibleError;
        },
        addItem(good) {
            makeGETRequest(`${API_URL}/addToBasket.json`, (data) => {
                if (data) {
                    let index = this.cartList.findIndex((item) => item.id_product == good.id_product);
                    if (index != -1) {
                        this.cartList[index].quantity = this.cartList[index].quantity + 1;
                        this.sumGoods();
                        return;
                    }
                    good.quantity = 1;
                    this.cartList.push(good);
                    this.sumGoods();
                } else {
                    this.isVisibleError = !data;
                    this.isVisibleErroMessage = "Не удается добавить товар в корзину";
                }
            });
        },
        removeItem(cartItem) {
            makeGETRequest(`${API_URL}/deleteFromBasket.json`, (data) => {
                if (data) {
                    let index = this.cartList.findIndex((item) => item.id_product == cartItem.id_product);
                    if (this.cartList[index].quantity > 1) {
                        this.cartList[index].quantity--;
                        this.sumGoods();
                        return;
                    }
                    this.cartList.splice(index, 1);
                    this.sumGoods();
                } else {
                    this.isVisibleError = !data;
                    this.isVisibleErroMessage = "Не удается добавить товар в корзину";
                }
            });
        }
    },
    mounted() {
        this.fetchGoods();
        this.loadCart();
    }
})