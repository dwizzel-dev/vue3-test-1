// store actions (are asynchronous) with const

const addVisit = ({ commit, state }, obj) => {
  // eslint-disable-next-line
  console.log(state);
  commit('addVisit', obj.count);
};

const resetVisit = ({ commit }) => {
  commit('setVisit', 0);
};

const addVisitAsync = ({ commit, state }, obj) => {
  // eslint-disable-next-line
  setTimeout(() => {
    console.log(state);
    commit('addVisit', obj.count);
  }, 2000);
};

export default {
  addVisit,
  resetVisit,
  addVisitAsync,
};
