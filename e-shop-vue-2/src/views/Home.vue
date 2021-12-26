<template>
  <main>
    <header>
      <Search v-bind:seacrhShow="1"/>
    </header>
    <div class="container">
      <ShowCase />
    </div>
  </main>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import Search from '@/components/Search.vue'
  import ShowCase from '@/components/ShowCase.vue'

  export default {
    name: 'Home',
    components: {
      Search,
      ShowCase
    }
  }
</script>