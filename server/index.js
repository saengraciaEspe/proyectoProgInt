
//Se importan las librerías
let app=require('express')();
const http =require('http').Server(app);
const express=require('express');
//Se tiene el nombre de el host y el puerto
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());
//middleware
app.use(function (req,res,next){
//Control de acceso a todo trafico entrante
  res.header("Access-Control-Allow-Origin","*");
  //Control de acceso a todo trafico entrante con todos los parametros desde la cabecera hasta el origen
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type,Accept");
  next();
});
//routes

app.use(require('./routes/plato'));




http.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/