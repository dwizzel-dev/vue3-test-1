// store getters with const

/*
export default {
  getVisits: state => state.visits,
};
*/

const isLoggedIn = state => state.isLoggedIn;

export default { isLoggedIn };
