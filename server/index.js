require('./conexion');
const express = require('express')
const port = (process.env.port || 3000)
const hostname = (process.env.hostname || 'localhost');
// express
const app = express()

//admitir
app.use(express.json())

//configurar
app.set('port',port);
app.set('hostname',hostname)

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