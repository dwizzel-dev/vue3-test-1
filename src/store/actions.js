// store actions with const

export const addVisit = ({ commit, state }, obj) => {
  // eslint-disable-next-line
  console.log(state);
  commit('addVisit', obj.count);
};

export const resetVisit = ({ commit }) => {
  commit('setVisit', 0);
};
