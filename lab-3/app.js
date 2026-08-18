import http from 'http';
const server=http.createServer();
server.on("request",(req,res)=>{
    res.write("welcome to the server side programming");
    res.write("<h2> nodemon is ttracing the file </h2>");
    res.end();
});

server.listen(5000,()=>{
    console.log("server is listening");
})