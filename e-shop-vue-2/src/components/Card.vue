<template>
    <div class="goods-item">
        <h3>{{data.product_name}}</h3>
        <p>{{goodSum}} руб.</p>
        <p>{{quantity}} шт.</p>
        <button v-on:click="onClick">{{action}}</button>
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