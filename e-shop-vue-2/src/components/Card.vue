<template>
    <div class="items__card">
        <!-- <h3>{{data.product_name}}</h3>
        <p>{{goodSum}} руб.</p>
        <p>{{quantity}} шт.</p>
        <button v-on:click="onClick">{{action}}</button> -->
        <a href="single-page.html" class="items__card__link">
            <img :src="require(`@/assets/img/items/${data.product_img}`)" alt="item" class="items__card__img">
            <h4 class="h4">{{data.product_name}}</h4>
            <p class="pink__letter">$ {{goodSum}}</p>
        </a>
        <div class="items__card__add__box">
            <a href="#add" class="items__card__add" v-on:click="onClick">
                <img src="../assets/img/cart_logo_w.png" alt="cart" class="cart_logo">
                <span class="add_text">Add to Cart</span>
            </a>
        </div>

    </div>




</template>

<script>
    export default {
        props: ['data', 'action', 'quantity'],
        computed: {
            goodSum: function () {
                return this.data.price * this.quantity;
            }
        },
        methods: {
            onClick() {
                this.$emit('action', this.data)
            }
        }
    }
</script>