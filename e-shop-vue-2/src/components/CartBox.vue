<template>
    <!-- <main>
    <header>
      <Search v-bind:seacrhShow="0" />
    </header>
    <div class="container">
      <template v-if="list.length > 0">
        <div class="cart">
          <Card v-for="good of list" v-bind:key="good.id_product" v-bind:data="good" v-bind:quantity="good.quantity"
            v-bind:action="'Удалить'" v-on:action="onRemoveFromCart" />
        </div>
      </template>
      <template v-else>
        <div class="cart">
          <h3>Список пуст</h3>
        </div>
      </template>
    </div>
  </main> -->
    <div class="button__cart">
        <template v-if="goodCount > 0">
            <div class="button__cart__count">{{goodCount}}</div>
        </template>
        <details>
            <summary class="cart__logo"></summary>
            <template v-if="goodCount > 0">
                <div class="menu__box">
                    <div class="menu__item">
                        <CardToCart v-for="good of list" v-bind:key="good.id_product" v-bind:data="good"
                            v-bind:quantity="good.quantity" v-bind:action="'Удалить'" v-on:action="onRemoveFromCart" />
                        <div class="product__cart__total">
                            <p>TOTAL</p>
                            <p id="total__price">$ {{goodSum}}</p>
                        </div>
                        <a href="checkout.html" class="button button__checkout">CHECKOUT</a>
                        <a href="shopping-cart.html" class="button button__to__cart">GO TO CART</a>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="menu__box">
                    <div class="menu__item">
                        <div class="product__cart__total">
                            <p>Корзина пуста</p>
                        </div>
                    </div>
                </div>
            </template>
        </details>
    </div>

</template>

<script>
    import CardToCart from '@/components/CardToCart.vue'
    export default {
        props: ['data'],
        components: {
            CardToCart
        },
        computed: {
            list() {
                return this.$store.getters.getCart;
            },
            goodCount: function () {
                let goodArr = this.$store.getters.getCart;
                let count = 0;
                goodArr.forEach((good) => {
                    count += good.quantity;
                })
                return count;
            },
            goodSum: function () {
                let goodArr = this.$store.getters.getCart;
                let sum = 0;
                goodArr.forEach((good) => {
                    sum += (good.quantity * good.price);
                })
                return sum;
            }
        },
        methods: {
            onRemoveFromCart(good) {
                this.$store.dispatch('deleteFromeCart', good.id_product)
            }
        }
    }
</script>

<style lang="scss">

</style>