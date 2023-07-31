const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    switch (req.method) {
        case "GET":
            // aqui vai a lógica do GET - exercício 5
            break
        case "POST":
            // aqui vai a lógica do POST - exercício 7
            break
    }
})
server.listen(3000);
