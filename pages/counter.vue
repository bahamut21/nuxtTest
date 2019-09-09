<template>
  <div id="app">
    <Logo />
    <h2>Nombre de clicks : <span>{{ $store.state.counter.supcount }} times</span>, the count is <span>{{ $store.state.counter.oddOrEven }}</span></h2>
    <button class="button" @click="increment">
      +
    </button>
    <button class="button" @click="decrement">
      -
    </button>
    <button class="button" @click="incrementIfOdd">
      Increment if odd
    </button>
    <button class="button" @click="incrementAsync">
      Increment async
    </button>
  </div>
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/Logo.vue')
  },
  methods: {
    increment () {
      this.$store.commit('counter/increment') // nom du fichierStore.js/nom de l'action
    },
    decrement () {
      this.$store.commit('counter/decrement') // nom du fichierStore.js/nom de l'action
    },
    incrementIfOdd () {
      this.$store.commit('counter/incrementIfOdd') // nom du fichierStore.js/nom de l'action
    },
    incrementAsync () {
      this.$store.commit('counter/incrementAsync') // nom du fichierStore.js/nom de l'action
    }
  }
}

</script>

<style lang="scss">
  button{
    padding: 10px;
    margin: 10px;
    background-color: aliceblue;
    color:rgb(62, 50, 165);
    font-size: 20px;
  }
  span{
    color: red;
  }
</style>
