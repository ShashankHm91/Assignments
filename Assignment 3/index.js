const http = require('http')
const fs = require('fs');


fs.writeFile("index.html", "<h1> Hello World </h1>", (err, data) => {
    if (err) {
        console.log(err);
    }
})

fs.appendFile("index.html", "\n<p> This is { SHASHANK H M }... </p>", (err, data) => {
    if (err) {
        console.log(err);
    }
})


const server = http.createServer((request, response) => {
    fs.readFile('./index.html', (err, html) => {
        if (err) {
            throw err;
        }
        response.writeHeader(200, { "Content-type": "text/html" });
        response.write(html);
        response.end();
    })
});

server.listen(5000, () => { console.log("server is up @ port:5000"); });