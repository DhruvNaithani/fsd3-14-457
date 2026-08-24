import http from 'http';
const server=http.createServer((req,res)=>{
    const{url,method}=req;
    res.setHeader('Content-Type','application/json');
    
    res.write("server is created");
    res.end();
});
server.listen(3001,()=>{
    console.log("server listens");
});
