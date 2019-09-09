<template>
  <div>
    <input
      id="displayer"
      type="text"
      name="displayer"
      readonly
      size="31"
      :value="$store.state.calculator.displayedValue"
    >
  </div>
</template>

<style lang="scss">
  input {
    background-color: antiquewhite;
    color: blue;
    border: 1px solid blue;
    border-radius: 5px;
  }
</style>
