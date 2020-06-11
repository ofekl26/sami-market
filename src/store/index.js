import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartarr: [],
  },
  mutations: {
    setCartArr(state, payload) {
      state.cartarr = payload;
    },
  },
  getters: {
    getCartArr(state) {
      return state.cartarr;
    },
  },
  actions: {},
  modules: {},
});
