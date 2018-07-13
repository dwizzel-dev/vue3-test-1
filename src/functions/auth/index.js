/* custom funtions test */

function Auth() {
  this.name = 'Auth';
  this.Auth = () => {
    console.log(`${this.name}.constructor()`);
  };
  this.doServerLogin = () => {
    console.log(`${this.name}.doServerLogin()`);
  };
}

export default new Auth();
