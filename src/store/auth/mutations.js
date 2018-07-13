// store mutations with object

export default { // synchronous change
  loginStatus: (state, status) => {
    state.isLoggedIn = status;
  },
};
