const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.route('/test').get(function (req, res) {
    io.emit('chat message', 'Hello');
    console.log(`Socket.IO server run`);
    res.end('semt');
});

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/message', function(req, res) {
    io.emit('chat message', req.body.message);
    console.log(req.body.message);
    res.end(req.body.message);
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
