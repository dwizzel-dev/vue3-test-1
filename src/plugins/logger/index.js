
/* custom plugin test adn with javscript class */

class Logger {
  // props
  name = 'Logger';
  Logger() {
    console.log(`${this.name}.constructor()`);
  }
  // method
  log(msg) {
    console.log(`${this.name}.log("${msg}")`);
  }
  // method
}

export default {
  install: (Vue) => {
    Object.defineProperty(
      Vue.prototype,
      '$logger',
      { value: new Logger() },
    );
  },
};

