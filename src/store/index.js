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
import counter from './counter';
import counter2 from './counter2';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    counter2,
    auth,
  },
});
