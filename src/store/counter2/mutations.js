// store mutations with object

export default { // synchronous change
  incrementVisit: (state) => {
    // eslint-disable-next-line
    console.log('counter2.mutations.incrementVisit: ' + state.visits);
    state.visits += 1;
  },
  addVisit: (state, count) => {
    state.visits += count;
  },
  setVisit: (state, count) => {
    state.visits = count;
  },
};
