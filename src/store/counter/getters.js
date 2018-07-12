// store getters with const

/*
export default {
  getVisits: state => state.visits,
};
*/

const getVisits = state => state.visits;

const getClicks = state => state.clicks;

export default { getVisits, getClicks };
