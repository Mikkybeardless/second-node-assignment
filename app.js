const http = require("http");
const hostname = "localhost";
const port = 8900;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/plain" });

  // using if else
  if (req.url === "/") {
    res.write("Home");
    res.end(); 
  }

  else if (req.method === "GET" && req.url === "/books") {
    res.write("hello from GET/books");
    res.end();
  } 
  
  else if (req.method === "POST" && req.url === "/books") {
    res.write("hello from POST/books");
    res.end();
  } 
  
  else if (req.method === "PUT" && req.url === "/books") {
    res.write("hello from PUT/books");
    res.end();
  }
  
  else if (req.method === "DELETE" && req.url === "/books") {
    res.write("Hello from DELETE/books");
    res.end();
  } 
  
  else if (req.method === "GET" && req.url === "/books/author/") {
    res.write("Hellow from GET/books/author");
    res.end();
  }
  
  else if (req.method === "POST" && req.url === "/books/author/") {
    res.write("Hellow from POST/books/author/");
    res.end();
  }
  
  else if (req.method === "PUT" && req.url === "/books/author/") {
    res.write("Hello from PUT/books/author");
    res.end();
  } 
  
  else {
    // res.writeHead(404, {'Content-Type':'text/plain'});
    res.write("404 page not found");
    res.end();
  }

  // using switch

  //  const route = `${req.method} ${req.url}`
  //           switch (route) {
  //             case'GET /':
  //               res.write("Home");
  //               res.end();
  //                break;
  //             case 'POST /books':
  //               res.write("hello from POST/books");
  //               res.end();
  //               break;
  //             case 'PUT /books':
  //               res.write('Hello from PUT/books');
  //               res.end();
  //               break;

  //             case 'DELETE /books':
  //               res.write('Hello from DELETE/books');
  //               res.end();

  //             default:
  //               res.write("404 page not found");
  //               res.end();
  //               break;
  //           }

  // res.end();
});

server.listen(port, function () {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
