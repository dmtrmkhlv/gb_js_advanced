<template>
    <!-- <div class="container header">
        <div class="seacrh">
            <input v-if="seacrhShow == 1" type="text" v-model="searchStr">
        </div>
        <div class="menu">
            <router-link to="/">Главная</router-link>
            <router-link to="/cart">Корзина ({{cartCount}})</router-link>
        </div>
    </div> -->
    <nav class="nav">
        <ul class="container nav__wrapper">
            <li class="nav__item">
                <a href="#" class="nav__item__link">HOME</a>
                <div class="menu__box">
                    <div class="menu__item">
                        <h3 class="menu__heading">HOME</h3>
                        <a href="product.html" class="menu__link">Dresses</a>
                        <a href="product.html" class="menu__link">Tops</a>
                        <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        <a href="product.html" class="menu__link">Jackets/Coats</a>
                        <a href="product.html" class="menu__link">Blazers</a>
                        <a href="product.html" class="menu__link">Denim</a>
                        <a href="product.html" class="menu__link">Leggings/Pants</a>
                        <a href="product.html" class="menu__link">Skirts/Shorts</a>
                        <a href="product.html" class="menu__link">Accessories</a>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">HOME</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <h3 class="menu__heading">HOME</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">HOME</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__item"><a href="#" class="nav__item__link">MAN</a>
                <div class="menu__box">
                    <div class="menu__item">
                        <h3 class="menu__heading">MAN</h3>
                        <a href="product.html" class="menu__link">Dresses</a>
                        <a href="product.html" class="menu__link">Tops</a>
                        <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        <a href="product.html" class="menu__link">Jackets/Coats</a>
                        <a href="product.html" class="menu__link">Blazers</a>
                        <a href="product.html" class="menu__link">Denim</a>
                        <a href="product.html" class="menu__link">Leggings/Pants</a>
                        <a href="product.html" class="menu__link">Skirts/Shorts</a>
                        <a href="product.html" class="menu__link">Accessories</a>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">MAN</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <h3 class="menu__heading">MAN</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">MAN</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__item"><a href="#" class="nav__item__link">WOMAN</a>
                <div class="menu__box">
                    <div class="menu__item">
                        <h3 class="menu__heading">WOMAN</h3>
                        <a href="product.html" class="menu__link">Dresses</a>
                        <a href="product.html" class="menu__link">Tops</a>
                        <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        <a href="product.html" class="menu__link">Jackets/Coats</a>
                        <a href="product.html" class="menu__link">Blazers</a>
                        <a href="product.html" class="menu__link">Denim</a>
                        <a href="product.html" class="menu__link">Leggings/Pants</a>
                        <a href="product.html" class="menu__link">Skirts/Shorts</a>
                        <a href="product.html" class="menu__link">Accessories</a>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">WOMAN</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <h3 class="menu__heading">WOMAN</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">WOMAN</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__item"><a href="#" class="nav__item__link">KIDS</a>
                <div class="menu__box">
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">KIDS</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <h3 class="menu__heading">KIDS</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">KIDS</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__item"><a href="#" class="nav__item__link">ACCESSORIES</a>
                <div class="menu__box">
                    <div class="menu__item">
                        <h3 class="menu__heading">ACCESSORIES</h3>
                        <a href="product.html" class="menu__link">Dresses</a>
                        <a href="product.html" class="menu__link">Tops</a>
                        <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        <a href="product.html" class="menu__link">Jackets/Coats</a>
                        <a href="product.html" class="menu__link">Blazers</a>
                        <a href="product.html" class="menu__link">Denim</a>
                        <a href="product.html" class="menu__link">Leggings/Pants</a>
                        <a href="product.html" class="menu__link">Skirts/Shorts</a>
                        <a href="product.html" class="menu__link">Accessories</a>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">ACCESSORIES</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__item last"><a href="#" class="nav__item__link">FEATURED</a>
                <div class="menu__box">
                    <div class="menu__item">
                        <h3 class="menu__heading">FEATURED</h3>
                        <a href="product.html" class="menu__link">Dresses</a>
                        <a href="product.html" class="menu__link">Tops</a>
                        <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        <a href="product.html" class="menu__link">Jackets/Coats</a>
                        <a href="product.html" class="menu__link">Blazers</a>
                        <a href="product.html" class="menu__link">Denim</a>
                        <a href="product.html" class="menu__link">Leggings/Pants</a>
                        <a href="product.html" class="menu__link">Skirts/Shorts</a>
                        <a href="product.html" class="menu__link">Accessories</a>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">FEATURED</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <h3 class="menu__heading">FEATURED</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">FEATURED</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav__item last"><a href="#" class="nav__item__link">HOT DEALS</a>
                <div class="menu__box">
                    <div class="menu__item">
                        <h3 class="menu__heading">HOT DEALS</h3>
                        <a href="product.html" class="menu__link">Dresses</a>
                        <a href="product.html" class="menu__link">Tops</a>
                        <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        <a href="product.html" class="menu__link">Jackets/Coats</a>
                        <a href="product.html" class="menu__link">Blazers</a>
                        <a href="product.html" class="menu__link">Denim</a>
                        <a href="product.html" class="menu__link">Leggings/Pants</a>
                        <a href="product.html" class="menu__link">Skirts/Shorts</a>
                        <a href="product.html" class="menu__link">Accessories</a>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">HOT DEALS</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <h3 class="menu__heading">HOT DEALS</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                        </div>
                    </div>
                    <div class="menu__item__box">
                        <div class="menu__item">
                            <h3 class="menu__heading">HOT DEALS</h3>
                            <a href="product.html" class="menu__link">Dresses</a>
                            <a href="product.html" class="menu__link">Tops</a>
                            <a href="product.html" class="menu__link">Sweaters/Knits</a>
                            <a href="product.html" class="menu__link">Jackets/Coats</a>
                        </div>
                        <div class="menu__item">
                            <a href="#">
                                <img src="../assets/img/super-sale.jpg" alt="super-sale" class="menu__item__img">
                                <p class="menu__item__text">SUPER<br>SALE!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        // props: ['seacrhShow'],
        // computed: {
        //     cartCount: function () {
        //         let countGoodsSum = 0;
        //         this.$store.getters.getCart.map(good => good.quantity).forEach((item) => {
        //             countGoodsSum = countGoodsSum + item;
        //         });
        //         // console.log(countGoodsSum)
        //         return countGoodsSum;
        //     },
        //     searchStr: {
        //         get() {
        //             return this.$store.getters.getSearchString
        //         },
        //         set(value) {
        //             this.$store.commit('setFilter', value);
        //         }
        //     }
        // },
        // methods: {
        //     onSearch() {

        //     }
        // }
    }
</script>


<style lang="scss">

</style>