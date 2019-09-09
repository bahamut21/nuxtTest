<template>
  <div>
    <textarea
      id="displayer"
      rows="3"
      cols="30"
      name="displayer"
      readonly
      :value="$store.state.calculator.secondDisplayValue"
    />
  </div>
</template>

<style lang="scss">
  textarea {
    background-color: antiquewhite;
    color: green;
    margin-top: 5%;
    border: 1px solid blue;
    border-radius: 5px;
  }
</style>
