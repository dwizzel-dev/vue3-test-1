/**
 * @examples: https://vuex.vuejs.org/guide/state.html
 *            https://github.com/vuejs/vuex/tree/dev/examples
 *            https://github.com/vuejs/vuex/tree/dev/examples/counter-hot (observer in components)
 */

// architecture approach
import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

// with object instance approach
import mutations from './mutations';
import state from './state';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});

/*
// direct approach
import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    visits: 0,
  },
  mutations: { // synchronous change
    incrementVisit: (state) => {
      state.visits += 1;
    },
    addVisit: (state, count) => {
      state.visits += count;
    },
    setVisit: (state, count) => {
      state.visits = count;
    },
  },
  actions: { // asynchronous change
    addVisit: ({ commit, state }, obj) => {
      // eslint-disable-next-line
      console.log(state);
      commit('addVisit', obj.count);
    },
    resetVisit: ({ commit }) => {
      commit('setVisit', 0);
    },
  },
  getters: {
    getVisits: state => state.visits,
  },
});

export default store;
*/
