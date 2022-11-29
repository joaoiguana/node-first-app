// Example of a simple JS function
// const sayHello = (name) => {
//   console.log('Hello ' + name +'!');
// }
// sayHello('João');


// Load a module to this one
// const logger = require('./logger');

// logger.log('message');


// // Using Path Module
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);


// // Using OS Module
// const os = require('node:os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


// // File System Module

// const fs = require('fs');

// // const files = fs.readdirSync('./');  ---Synchronous way
// // console.log(files);

// fs.readdir('./', function(err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files)
// });


// Events Module

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Regiter a listener
emitter.on('messageLogged', function(){
  console.log('Listener called')
});

// Raise an event
emitter.emit('messageLogged');
