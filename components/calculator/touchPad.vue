<template>
  <div class="touchPad">
    <div class="chiffres">
      <touch v-for="(numTouch, index) in numTouchs" :key="`numTouch-${index}`" :num="numTouch" />
    </div>
    <div class="operat">
      <operTouch v-for="(operator, index) in operators" :key="`operator-${index}`" :oper="operator" />
    </div>
  </div>
</template>

<script>
import touch from '~/components/calculator/touch'
import operTouch from '~/components/calculator/operTouch'
export default {
  components: {
    touch,
    operTouch
  },
  data () {
    return {
      numTouchs: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='],
      operators: ['-', '+', '*', '/', 'C']
    }
  }
}
</script>

<style lang="scss">
  .touchPad {
    width: 300px;
    display: flex;
    justify-content: center;
    .chiffres {
      width: 225px;
    }
    .operat{
      width: 75px;
      margin-top: 12px;
    }
  }
</style>
