const fs = require('fs');
const http = require('http');

let server = http.createServer((req,resp)=>{
  if(req.url === "/home"){
        resp.writeHead(404, {'Content-Type':'text/html'});
        fs.readFile('./views/home.html', {encoding:'ascii'}, (error,file)=>{
            if(error){
                resp.write('The Requested Resource is not found');
                resp.end();
            }
            resp.write(file.toString());
            resp.end();
        });
  } else {
    if(req.url === "/about"){
        resp.writeHead(404, {'Content-Type':'text/html'});
            fs.readFile('./views/about.html', {encoding:'ascii'}, (error,file)=>{
                if(error){
                    resp.write('The Requested Resource is not found');
                    resp.end();
                }
                resp.write(file.toString());
                resp.end();
            });
        }
        else {
            resp.write('Please check the URL');
            resp.end();
        } 
    }
});


server.listen(6001);
console.log('Started on port 6001');