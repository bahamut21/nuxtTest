export const state = () => ({
  displayedValue: '',
  secondDisplayValue: '',
  firstRegisterValue: '',
  secondRegisterValue: '',
  resultRegisterValue: '',
  operator: '+'
})

export const mutations = {
  addNumber (state, num) {
    state.displayedValue += num
  },
  clear (state) {
    state.firstRegisterValue ? state.secondRegisterValue = state.displayedValue : state.firstRegisterValue = state.displayedValue
    state.displayedValue = ''
    console.log(state.firstRegisterValue)
    console.log(state.secondRegisterValue)
    if (state.secondRegisterValue) {
      state.resultRegisterValue = Number(state.firstRegisterValue) + Number(state.secondRegisterValue)
      console.log(state.resultRegisterValue)
      state.secondDisplayValue = state.firstRegisterValue + ' ' + state.operator + ' ' + state.secondRegisterValue + ' = ' + state.resultRegisterValue
      state.displayedValue = state.resultRegisterValue
      state.firstRegisterValue = state.displayedValue
    }
  }
}
