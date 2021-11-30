const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const $cartButton = document.querySelector('.cart-button');
const $cartList = document.querySelector('.cart-list');

$cartButton.addEventListener('click',()=>{
    $cartList.classList.toggle('show');
})

function makeGETRequest(URL, callback) {
    fetch(URL)
        .then((request) => {
            return request.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

class GoodsItem {
    constructor(id_product, product_name, price) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item" data-id-product=${this.id_product}><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(fn) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = goods;
            fn();
        });
    }

    sumGoods() {
        let sum = this.goods.map(good => good.price).reduce((total, amount) => total + amount);
        return sum
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
    console.log(list.sumGoods());
})

class CartItem {
    constructor(id_product, product_name, price, quantity) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return `<div class="cart-item" data-id-product="${this.id_product}"><h3>${this.product_name}</h3><p>${this.price} руб.</p><p>${this.quantity} шт.</p></div>`;
    }
}

class CartList {
    constructor() {
        this.cartGoods = [];
    }

    fetchGoods(fn) {
        makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
            this.cartGoods = goods;
            fn();
        });
    }

    addItem(good) {
        this.cartGoods.contents.push(good)
    }

    removeItem(id) {
        let index = this.cartGoods.findIndex((cartGood)=> cartGood.id == id);
        if(index != -1){
            this.cartGoods.contents.slice(index, 100);
        }
    }

    render() {
        let listHtml = '';
        console.log(this.cartGoods)
        this.cartGoods.contents.forEach(good => {
            const cartGood = new CartItem(good.id_product, good.product_name, good.price, good.quantity);
            listHtml += cartGood.render();
        });
        listHtml += `<div class="cart-item""><h3>ИТОГО: ${this.cartGoods.amount} руб.</h3><p>Количество: ${this.cartGoods.countGoods} шт.</p></div>`;

        document.querySelector('.cart-list').innerHTML = listHtml;
    }
}

const cart = new CartList();
cart.fetchGoods(()=>{
    cart.render();
})
