// store mutations with object

export default { // synchronous change
  incrementVisit: (state) => {
    // eslint-disable-next-line
    console.log('increment counter 2: ' + state.visits);
    state.visits += 1;
  },
  addVisit: (state, count) => {
    state.visits += count;
  },
  setVisit: (state, count) => {
    state.visits = count;
  },
};
