<template>
  <button class="touch" :value="num" @click="addNumber">
    {{ num }}
  </button>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '8'
    }
  },
  methods: {
    addNumber (event) {
      this.$store.commit('calculator/addNumber', event.target.value)
    }
  }
}
</script>

<style lang="scss">
  .touch {
    margin-top: 8%;
    background-color: beige;
    color: aqua;
    font-weight: bold;
    border: 1px solid blue;
    border-radius: 5px;
    width: 75px;
    height: 30px;
  }
</style>
