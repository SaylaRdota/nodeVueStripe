const app = require('./config/server')
require ('./app/api/rest/payStripe')(app)

//iniciar el sevidor
const server = app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'))
})


const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });
});
