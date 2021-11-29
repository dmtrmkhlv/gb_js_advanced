class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    

    fetchGoods() {
        this.goods = [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
        ];
    }

    sumGoods() {
        let sum = this.goods.map(good => good.price).reduce((total, amount) => total + amount);
        return sum;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.sumGoods());

class CartItem {
    constructor(id, title, price, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.count = count;
    }

    render() {
        return `<div class="cart-item" data-good-id="${this.id}"><h3>${this.title}</h3><p>${this.price}</p><p>${this.count}</p></div>`;
    }
}

class CartList {
    constructor() {
        this.cartGoods = [{
                id: 1,
                title: 'Shirt',
                price: 150,
                count: 2,
            },
            {
                id: 2,
                title: 'Socks',
                price: 50,
                count: 3,
            }
        ];
    }

    addItem(id) {
        return this.cartGoods;
    }

    removeItem(id) {
        return this.cartGoods;
    }

    render() {
        let listHtml = '';
        this.cartGoods.forEach(good => {
            const cartGood = new CartItem(good.id, good.title, good.price, good.count);
            listHtml += cartGood.render();
        });
        document.querySelector('.cart-list').innerHTML = listHtml;
    }

}


class Hamburger {
    constructor(size, stuffing = null) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = {
            seasoning: {
                price: 15,
                calories: 0,
                count: 0,
            },
            mayonnaise: {
                price: 20,
                calories: 5,
                count: 0,
            }
        };
    }
    // Добавить добавку 
    addTopping(type) {
        this.topping[type].count++;
        return this.topping[type].count;
    }
    // Убрать добавку 
    removeTopping(type) {
        if (this.topping[type].count > 0) {
            this.topping[type].count--;
            return this.topping[type].count;
        }
        alert("Такой добавки нет в гамбургере");
    }
    // Получить список добавок
    getToppings() {
        let toppingList = {};
        for (let key in this.topping) {
            if (this.topping[key].count > 0) {
                toppingList[key] = this.topping[key];
            }
        }
        if (Object.keys(toppingList).length != 0) {
            console.log("Список добавок: \n", toppingList);
            return toppingList;
        }
        alert("Добавок нет");
        return false;
    }
    // Узнать размер гамбургера
    getSize() {
        if (this.stuffing != null) {
            console.log("Размер гамбургера: \n", this.size);
            return this.size;
        }
        alert("Чтобы узнать размер сначала добавьте начинку");
    }
    // Узнать начинку гамбургера
    getStuffing() {
        let stuffingInfo = {
            name: "",
            price: 0,
            calories: 0,
        }
        switch (this.stuffing) {
            case "cheese":
                stuffingInfo.name = "С сыром";
                stuffingInfo.price = 10;
                stuffingInfo.calories = 20;
                break;
            case "salad":
                stuffingInfo.name = "С салатом";
                stuffingInfo.price = 20;
                stuffingInfo.calories = 5;
                break;
            case "potatoes":
                stuffingInfo.name = "С картофелем";
                stuffingInfo.price = 15;
                stuffingInfo.calories = 10;
                break;
            default:
                alert("Начинка отсутствует!");
                return false;
        }
        console.log("Начинка гамбургера: \n", stuffingInfo);
        return stuffingInfo;

    }
    //Узнать информацию о размере гамбургера
    sizeInfo(){
        let sizeInfo = {
            name: this.size,
            price: 0,
            calories: 0,
        }
        switch (sizeInfo.name) {
            case "small":
                sizeInfo.price = 50;
                sizeInfo.calories = 20;
                break;
            case "big":
                sizeInfo.price = 100;
                sizeInfo.calories = 40;
                break;
        }
        return sizeInfo;
    }
    // Узнать цену
    calculatePrice() {
        if (this.stuffing != null) {
          
            let price = 0;
            let allToppings = this.getToppings();
            if (allToppings != false) {
                for (let key in allToppings) {
                    price += (allToppings[key].price * allToppings[key].count);
                }
            }
            if (this.getStuffing() != false) {
                price += this.getStuffing().price += this.sizeInfo().price;
                console.log("Цена гамбургера: \n", price);
                return price;
            }
        }
        alert("Чтобы узнать цену сначала добавьте начинку");
    }
    // Узнать калорийность
    calculateCalories() {
        if (this.stuffing != null) {
            let calories = 0;
            let allToppings = this.getToppings();
            if (allToppings != false) {
                for (let key in allToppings) {
                    calories += (allToppings[key].calories * allToppings[key].count);
                }
            }
            if (this.getStuffing() != false) {
                calories += this.getStuffing().calories += this.sizeInfo().calories;
                console.log("Калорийность гамбургера: \n", calories);
                return calories;
            }
        }
        alert("Чтобы узнать калорийность сначала добавьте начинку");
    }
}

let hamburger = new Hamburger("small", "salad");
hamburger.addTopping("seasoning");
hamburger.addTopping("seasoning");
hamburger.addTopping("mayonnaise");
hamburger.addTopping("mayonnaise");
hamburger.removeTopping("mayonnaise");
hamburger.getToppings();
hamburger.getStuffing();
hamburger.getSize();
hamburger.calculatePrice();
hamburger.calculateCalories();
console.log(hamburger);