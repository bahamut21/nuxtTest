export const state = () => ({
  supcount: 0,
  oddOrEven: 'even'
})

export const mutations = {
  increment (state) {
    state.supcount++
  },
  decrement (state) {
    state.supcount--
  },
  incrementIfOdd (state) {
    if (state.supcount % 2) {
      state.supcount++
      state.oddOrEven = 'even'
    }
  },
  incrementAsync (state) {
    if (state.supcount % 2 === 0) {
      state.supcount++
      state.oddOrEven = 'odd'
    }
  }
}
