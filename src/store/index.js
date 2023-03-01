import {createStore } from 'vuex'
const store = createStore({
  state () {
    return {
      apiToken: 0
    }
  },
})
export default store;