import WebSocket from 'ws';
import http from 'http';

const server =http.createServer(req,res);
const wss= new WebSocket.Server({server});

wss.on('connection',function connection(ws: WebSocket){
    ws.on('message', function incoming(msg:WebSocket.Data){
        console.log(msg);
    });
    ws.send('connected');
});

server.listen(8889,()=>{
    console.log('server Started :)');
}
)