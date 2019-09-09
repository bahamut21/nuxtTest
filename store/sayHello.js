
export const state = () => ({
  message: 'hello dude !'
})

export const mutations = {
  reset (state) {
    if (state.message === 'hello dude' || state.message === 'olla ombre !') {
      state.message = ''
    } else if (state.message === '') {
      state.message = 'hello dude !'
    }
  },
  translate (state) {
    if (state.message === 'hello dude !') {
      state.message = 'olla ombre !'
    } else if (state.message === 'olla ombre !') {
      state.message = 'hello dude !'
    }
  }
}
