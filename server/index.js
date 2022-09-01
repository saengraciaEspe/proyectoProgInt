require('./conexion');
const express = require('express')
const port = (process.env.port || 3000)
const hostname = (process.env.hostname || '127.0.0.1');
// express
const app = express()

//admitir
app.use(express.json())

//configurar
app.set('port',port);
app.set('hostname',hostname)



//middleware
app.use(function (req,res,next){
  //Control de acceso a todo trafico entrante
    res.header("Access-Control-Allow-Origin","*");
    //Control de acceso a todo trafico entrante con todos los parametros desde la cabecera hasta el origen
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept");
    next();
  });

//rutas
app.use('/api', require('./rutas'))
//inicializar express
app.listen(app.get('port'),app.get('hostname'), (error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
      console.log(`Server running at http://${hostname}:${port}/`);
    }
})