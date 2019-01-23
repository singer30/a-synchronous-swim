const headers = require('./cors');
const messages = require('./messageQueue.js');
//const messagesQueue require messagesQueue
/*
i: Ajax request, response based on the type of request 
o: send a proper response using response.end
C:
e:
*/

module.exports.initialize = (messages) => {
return (req, res) => {
  var direction = messages.dequeue();
  res.writeHead(200, headers);
  res.end(direction);
} 

};

//messages.dequeue()

