const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'views/about.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'views/contact.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else {
        // res.writeHead(404, {'Content-Type': 'text/html'});
        // res.write(`<h1>Page NOT FOUND!</h1>`);
        // res.end();
        fs.readFile(path.join(__dirname, 'views/not-found.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    
    
    
});

server.listen(3000, () => console.log('Server is up and running'));