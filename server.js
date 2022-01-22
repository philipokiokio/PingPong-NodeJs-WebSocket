
const { listen } = require('./sockets');
const { api } = require('./api')
const server= require('http').createServer(api);
const io = require('socket.io')(server,{
    cors:{
        origin: '*',
        method: ['GET', 'POST']
    }
})


const PORT = 4000;




server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT} ...`)
});

listen(io);