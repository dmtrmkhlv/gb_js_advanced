<template>
  <main>
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
  </main>

</template>

<script>
  import Card from '@/components/Card.vue'
  import Search from '@/components/Search.vue'
  export default {
    components: {
      Card,
      Search
    },
    computed: {
      list() {
        return this.$store.getters.getCart;
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
    .cart{
      display: flex;
      .goods-item{
        width: 200px;
        margin-right: 10px;
      }
    }
</style>