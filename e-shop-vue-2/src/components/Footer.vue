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
    <footer class="footer ">
        <div class="container footer__top content">
            <div class="footer__top__column ">
                <a href="index.html" class="main__logo">
                    <img src="../assets/img/logo.png" alt="logo" class="main__logo__img">
                    <p class="main__logo__title">BRAN<span class="pink__letter">D</span></p>
                </a>
                <p class="footer__top__column__text">Objectively transition extensive data rather than cross
                    functional
                    solutions. Monotonically syndicate multidisciplinary materials before go forward benefits.
                    Intrinsically syndicate an expanded array of processes and cross-unit partnerships.
                </p>
                <p class="footer__top__column__text">Efficiently plagiarize 24/365 action items and focused
                    infomediaries. Distinctively seize superior initiatives for wireless technologies.
                    Dynamically
                    optimize.</p>
            </div>
            <nav class="footer__top__column">
                <h3 class="footer__menu__title pink__letter">COMPANY</h3>
                <a href="#" class="footer__menu__link">Home</a>
                <a href="#" class="footer__menu__link">Shop</a>
                <a href="#" class="footer__menu__link">About</a>
                <a href="#" class="footer__menu__link">How It Works</a>
                <a href="#" class="footer__menu__link">Contact</a>
            </nav>
            <nav class="footer__top__column">
                <h3 class="footer__menu__title pink__letter">INFORMATION</h3>
                <a href="#" class="footer__menu__link">Terms & Condition</a>
                <a href="#" class="footer__menu__link">Privacy Policy</a>
                <a href="#" class="footer__menu__link">How to Buy</a>
                <a href="#" class="footer__menu__link">How to Sell</a>
                <a href="#" class="footer__menu__link">Promotion</a>
            </nav>
            <nav class="footer__top__column">
                <h3 class="footer__menu__title pink__letter">SHOP CATEGORY</h3>
                <a href="#" class="footer__menu__link">Men</a>
                <a href="#" class="footer__menu__link">Women</a>
                <a href="#" class="footer__menu__link">Child</a>
                <a href="#" class="footer__menu__link">Apparel</a>
                <a href="#" class="footer__menu__link">Brows All</a>
            </nav>
        </div>
        <div class="footer__bottom content">
            <div class="container footer__bottom__wrapper ">
                <div class="footer__rights">
                    <p class="footer__rights_text">© 2017 Brand All Rights Reserved.</p>
                </div>
                <div class="footer__social">
                    <a href="#" class="footer__social__link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square"
                            class="svg-inline--fa fa-facebook-square fa-w-14" role="../assets/img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                            </path>
                        </svg>
                    </a>
                    <a href="#" class="footer__social__link twitter">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square"
                            class="svg-inline--fa fa-twitter-square fa-w-14" role="../assets/img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z">
                            </path>
                        </svg>
                    </a>
                    <a href="#" class="footer__social__link linkedin">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin"
                            class="svg-inline--fa fa-linkedin fa-w-14" role="../assets/img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                            </path>
                        </svg>
                    </a>
                    <a href="#" class="footer__social__link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest-square"
                            class="svg-inline--fa fa-pinterest-square fa-w-14" role="../assets/img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z">
                            </path>
                        </svg>
                    </a>
                    <a href="#" class="footer__social__link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-square"
                            class="svg-inline--fa fa-google-plus-square fa-w-14" role="../assets/img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
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