import WebSocket from 'ws';
import http from 'http';

const server =http.createServer();
const wss= new WebSocket.Server({server});

wss.on('connection',function connection(ws){
    ws.on('message', function incoming(msg){
        console.log(msg);
    });
    ws.send('connected');
});

server.listen(8889,()=>{
    console.log('server Started :)');
}
)