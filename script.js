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
            console.log(error);
        })
}

new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    cartList: [],
    searchLine: '',
    isVisibleCart: false,
    sumInfo:[
        {amount: 0},
        {countGoods: 0}
    ],
  },
  methods: {
    fetchGoods(){
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            return this.goods = this.filteredGoods = goods;
        });
    },
    loadCart(){
        makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
            this.cartList = goods.contents;
            this.sumGoods();
        });
    },
    sumGoods() {
        let amountSum = 0;
        let countGoodsSum = 0;
        this.cartList.map(good => good.quantity).forEach((item)=>{
            countGoodsSum = countGoodsSum + item;
        });
        this.cartList.map(good => good.price * good.quantity).forEach((item)=>{
            amountSum = amountSum + item;
        });
        this.sumInfo.amount = amountSum;
        this.sumInfo.countGoods = countGoodsSum;
    },
    FilterGoods(){
        let reg = new RegExp(this.searchLine, 'i');
        this.filteredGoods = this.goods.filter((good)=> reg.test(good.product_name));
    },
    showCart(){
        this.isVisibleCart = !this.isVisibleCart;
    },
    addItem(good) {
        makeGETRequest(`${API_URL}/addToBasket.json`, () => {
            let index = this.cartList.findIndex((item)=> item.id_product == good.id_product);
            if(index != -1){
                this.cartList[index].quantity = this.cartList[index].quantity + 1;
                this.sumGoods();
                return;
            }
            good.quantity = 1;
            this.cartList.push(good);
            this.sumGoods();
        });
    },
    removeItem(cartItem){
        makeGETRequest(`${API_URL}/deleteFromBasket.json`, () => {
            let index = this.cartList.findIndex((item)=> item.id_product == cartItem.id_product);
            if(this.cartList[index].quantity > 1){
                this.cartList[index].quantity--;
                this.sumGoods();
                return;
            }
            this.cartList.splice(index, 1);
            this.sumGoods();
        });       
    }

  },
  mounted() {
    this.fetchGoods();
    this.loadCart();
  }
})