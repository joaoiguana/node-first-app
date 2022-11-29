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


// // Events Module

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Regiter a listener (with event argument)
// emitter.on('messageLogged', function(arg){
//   console.log('Listener called', arg)
// });

// // Raise an event (with a Event Argument)
// emitter.emit('messageLogged', { id:1, url: 'http://' });


// // Extending Event Emitter

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger;

// // Regiter a listener (with event argument)
// logger.on('messageLogged', (arg) => {
//   console.log('Listener called', arg)
// });

// logger.log('message');


// HTTP MODULE

const http = require ('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello World');
    response.end();
  }

  if (request.url === '/api/courses') {
    response.write(JSON.stringify([1, 2, 3]))
    response.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000...');
