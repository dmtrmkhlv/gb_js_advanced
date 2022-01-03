<template>
    <div class="product__cart">
    <a href="single-page.html" class="product__cart__item">
        <img :src="require(`@/assets/img/items/${data.product_img}`)" alt="product" class="product__cart__img">
        <div class="product__cart__info">
            <div class="product__cart__title">{{data.product_name}}</div>
            <div class="product__cart__rate">
                <span class="fill_rate">☆</span>
                <span class="fill_rate active">☆</span>
                <span class="fill_rate active">☆</span>
                <span class="fill_rate active">☆</span>
                <span class="fill_rate active">☆</span>
            </div>
            <div class="product__cart__sum">
                <p class="product__cart__count pink__letter">{{data.quantity}}</p>
                <p class="product__cart__X pink__letter"> x $</p>
                <p class="product__cart__price pink__letter">{{data.price}}</p>
            </div>
        </div>
    </a>
    <a href="#" class="product__cart__item product__delete" v-on:click="onClick">
        <div class="product__delete__icon"></div>
    </a>
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