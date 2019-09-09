<template>
  <div>
    <p> {{ $store.state.sayHello.message }} </p>
    <button class="button" @click="reset">
      reset
    </button>
    <button class="button" @click="translate">
      translate
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    reset () {
      this.$store.commit('sayHello/reset')
    },
    translate () {
      this.$store.commit('sayHello/translate')
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
