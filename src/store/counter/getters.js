// store getters with const

/*
export default {
  getVisits: state => state.visits,
};
*/

const getVisits = state => state.visits;

export default { getVisits };
