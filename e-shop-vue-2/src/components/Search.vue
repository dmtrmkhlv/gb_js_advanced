<template>
    <div class="container header">
        <div class="seacrh">
            <input v-if="seacrhShow == 1" type="text" v-model="searchStr">
        </div>
        <div class="menu">
            <router-link to="/">Главная</router-link>
            <router-link to="/cart">Корзина ({{cartCount}})</router-link>
        </div>
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
                // console.log(countGoodsSum)
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
            onSearch() {

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