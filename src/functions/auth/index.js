/* custom funtions */

function Auth() {
  this.Auth = () => {
    // eslint-disable-next-line
    console.log('AuthFunc.constructor()');
  };
  this.doServerLogin = () => {
    // eslint-disable-next-line
    console.log('Do Server Login');
  };
}

export default new Auth();
