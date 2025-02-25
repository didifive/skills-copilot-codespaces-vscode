// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.readFile(__dirname + "/comments.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("500 Internal Server Error");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}).listen(3000);
console.log("Server is running at http://localhost:3000");