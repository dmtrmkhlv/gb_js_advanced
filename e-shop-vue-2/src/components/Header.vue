<template>
    <header class="header">
        <div class="container header__wrapper">
            <div class="header__left">
                 <router-link to="/lnjkn">
                <a href="/" class="main__logo">
                    <img src="../assets/img/logo.png" alt="logo" class="main__logo__img">
                    <p class="main__logo__title">BRAN<span class="pink__letter">D</span></p>
                </a>
                </router-link>
                <div class="header__left__box">
                    <details class="button button__browse">
                        <summary class="button__browse__title">Browse</summary>
                        <div class="menu__box">
                            <nav class="menu__item">
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
                            </nav>
                            <nav class="menu__item">
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
                            </nav>
                        </div>
                    </details>
                    <Search v-bind:seacrhShow="1"/>
                </div>
            </div>
            <div class="header__right">
                <CartBox />
                <details class="button button__account">
                    <summary class="button__account__title">My Account</summary>
                </details>
            </div>
        </div>
    </header>
</template>

<script>
  import Search from '@/components/Search.vue'
  import CartBox from '@/components/CartBox.vue'

  export default {
    name: 'Header',
    components: {
      Search,
      CartBox
    }
  }
</script>


<style lang="scss">

</style>