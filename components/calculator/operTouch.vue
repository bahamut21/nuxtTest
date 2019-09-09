<template>
  <button class="operTouch" :value="oper" @click="addOper">
    {{ oper }}
  </button>
</template>

<script>
export default {
  props: {
    oper: {
      type: String,
      default: '+'
    }
  },
  methods: {
    addOper (event) {
      this.$store.commit('calculator/clear', event.target.value)
    }
  }
}
</script>

<style lang="scss">
  .operTouch {
    margin-top: 8%;
    margin-left: 10px;
    background-color: beige;
    color: green;
    font-weight: bold;
    border: 1px solid blue;
    border-radius: 5px;
    width: 65px;
    height: 30px;
  }
</style>
