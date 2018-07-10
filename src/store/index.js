/**
 * @examples: https://vuex.vuejs.org/guide/state.html
 */
import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    visits: 0,
  },
  mutations: {
    increment(state) {
      state.visits += 1;
    },
  },
  getters: {
    getVisits: state => state.visits,
  },
});

export default store;
