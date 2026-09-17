const {sumRequestHandler} = require('./sum');

const requesthandler=(req,res)=>{
    console.log(req.url,req.method);

    if(req.url==='/'){
        res.setHeader('content-type' , 'text/html');
        res.write(`<html>
            <head><title>Practice set</head></title>
            <body>
            <h1>welcome to the calculator</h1>
            <a href="/calculator">go to calculator</a>
            </body>
            </html>`);
            return res.end();
    }else if(req.url.toLowerCase()==="/calculator"){
        res.setHeader('content-type' , 'text/html');
        res.write(`
        <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First Num" name="first" />
            <input type="text" placeholder="Second Num" name="second" />
            <input type="submit" value="Sum">
          </form>
        </body>  
        <html> 
     `);
     return res.end();
    }else if (req.url.toLowerCase() === "/calculate-result" &&
      req.method === 'POST') {
    return sumRequestHandler(req, res);
    }
}

exports.requestHandler = requestHandler;