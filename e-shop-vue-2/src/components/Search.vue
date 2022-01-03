<template>
    <div class="header__search__form">
        <input v-if="seacrhShow == 1" 
        v-model="searchStr"
        type="text" 
        class="header__search__input" 
        placeholder="Search for Item...">
        <!-- <button v-on:click="onClick" type="submit" class="button button__search"></button> -->
    </div>
</template>

<script>
    export default {
        props: ['seacrhShow'],
        computed: {
            cartCount: function () {
                let countGoodsSum = 0;
                this.$store.getters.getCart.map(good => good.quantity).forEach((item) => {
                    countGoodsSum = countGoodsSum + item;
                });
                return countGoodsSum;
            },
            searchStr: {
                get() {
                    return this.$store.getters.getSearchString
                },
                set(value) {
                    this.$store.commit('setFilter', value);
                }
            }
        },
        methods: {
            onClick() {
                console.log("searh")
                // this.$emit('action', this.data)
            }
        }
    }
</script>


<style lang="scss">
    .menu {

        a {
            margin-left: 10px;
        }
    }
</style>