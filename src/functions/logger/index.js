/* logger functions to use with external lib like store and router */

class Logger {
  // props
  constructor() {
    this.name = 'Logger';
    // constructor
    this.Logger = () => {
      console.log(`${this.name}.constructor()`);
    };
    // method
    this.log = (args) => {
      if (typeof args === 'object') {
        // eslint-disable-next-line
        console.warn(args);
      } else {
        // eslint-disable-next-line
        console.log(`"${args}"`);
      }
    };
  }
}

export default new Logger();
