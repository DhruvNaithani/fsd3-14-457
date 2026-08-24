import http from 'http';
const server=http.createServer((req,res)=>{
    res.write("prg2 is created");
    res.end();
});
server.listen(3002,()=>{
    console.log("prg2 is working");
});