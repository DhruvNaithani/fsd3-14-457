import http from 'http';
const server=http.createServer((req,res)=>{
    res.write("welcome to prg3");
});
server.listen(3003,()=>{
    console.log('listening');
});