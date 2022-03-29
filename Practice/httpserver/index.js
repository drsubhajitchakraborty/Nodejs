const http=require('http');
let port = 3000;
const server=http.createServer((req,res)=>{
   res.end("Response From other site");
});

server.listen(port,()=>{
    console.log(`Server running sucessfully!! And ${port} is the port number.`);
});