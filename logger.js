// console.log(__filename);
// console.log(__dirname);

// // Imagine that you want to log your message to this fake http path
// const url = 'http://mylogger.io/log';

// // And create a function to read it
// const log = (message) => {
//   // Send HTTP request
//   console.log(message);
// }

// // To access the previous const's in app.js we need to make them public
// module.exports.log = log;
// // module.exports.url = url; if we wanted to export the log message



// Extentding Event Emitter

const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send HTTP request
    console.log(message);

    // Raise an event (with a Event Argument)
    this.emit('messageLogged', { id:1, url: 'http://' });
  }
}

module.exports = Logger;
