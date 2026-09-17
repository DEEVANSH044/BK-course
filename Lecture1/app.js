const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    // process.exit(); 
})

const PORT=3005;

server.listen(PORT, ()=>{
    console.log(`server runing in address http://localhost:${PORT}`);
})