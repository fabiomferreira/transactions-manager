import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: false,
    textSnackbar: '',
  },
  getters: {
    getSnackbar(state) {
      return state.snackbar;
    },
    getTextSnackbar(state) {
      return state.textSnackbar;
    },
  },
  mutations: {
    setSnackbar(state, value) {
      state.snackbar = value;
    },
    setTextSnackbar(state, value) {
      state.textSnackbar = value;
    },
  },
  actions: {
    openSnackbar({ commit }, text) {
      commit('setSnackbar', true);
      commit('setTextSnackbar', text);
    },
    closeSnackbar({ commit }) {
      commit('setSnackbar', false);
    },
  },
});
