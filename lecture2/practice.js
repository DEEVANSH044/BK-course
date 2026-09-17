const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    


    res.write(
        `<html lang="en">
        <head>
        <title>Document</title>
        </head>
        <body>
        <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/shop">shop</a></li>
            </ul>
        </nav>
        </head>
        </body>
        </html>`);
        res.end();
})



server.listen(3001, () => {
  console.log('Server running on address http://localhost:3001');
});