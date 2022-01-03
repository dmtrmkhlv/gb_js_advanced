<template>
    <div class="container items__wrapper">
        <Card v-for="good of goodList" 
        v-bind:key="good.id" 
        v-bind:data="good" 
        v-bind:quantity = "1"
        v-bind:action="'Add To Cart'" 
        v-on:action="onAddToCart" />
    </div>
</template>

<script>
import Card from './Card.vue';
export default {
  components: { Card },
    computed:{
        goodList(){
            return this.$store.getters.getShowCase;
        }
    },
    methods:{
        onAddToCart(good){
            this.$store.dispatch('addToCart', good)
        }
    }
}
</script>