const http= require("http");

const server= http.createServer((req,resp)=>{
    console.log("respuesta del servidor---");
    resp.end("Te envio un saludo desde el servidor node.js v.1");
}
);

const puerto=3000;

server.listen(puerto,()=>{
    console.log("Escuchando....")
})
