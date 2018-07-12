// store mutations with object

export default { // synchronous change
  incrementVisit: (state) => {
    state.visits += 1;
  },
  addVisit: (state, count) => {
    state.visits += count;
  },
  setVisit: (state, count) => {
    state.visits = count;
  },
  incrementClick: (state) => {
    state.clicks += 1;
  },
};
