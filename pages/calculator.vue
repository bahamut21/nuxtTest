<template>
  <div class="calculator">
    <Logo />
    <h1>Calculator</h1>
    <inputDisplay />
    <secondDisplay />
    <touchPad />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import inputDisplay from '~/components/calculator/inputDisplay'
import touchPad from '~/components/calculator/touchPad'
import secondDisplay from '~/components/calculator/secondDisplay'
export default {
  components: {
    Logo,
    inputDisplay,
    touchPad,
    secondDisplay
  }
}
</script>

<style lang="scss">
  .calculator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;
  }

</style>
