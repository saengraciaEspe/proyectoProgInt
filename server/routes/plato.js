const express= require('express');
const router = express.Router();
var getConnection=require('../conexion');
//consultar  un usuario 
router.get('/usuario/',(req,res)=>{
    console.log("Entro a usuario por cédula");
    getConnection(function (err, conn){
        
        if(err){
            return res.sendStatus(400);
        }
        conn.query('SELECT * FROM plato;', function (err,result){
            if(err){
                conn.release();
                return res.sendStatus(400,
                     'No se puede realizar la consulta , intente más tarde  o revise la conexión a la base de datos');
            }
            res.send(result);
            conn.release();
        });
    });
});
//almacenar un cliente en la base de datos
router.post('/usuario/', (req, res, next)=>{
    const data ={
        nombreusuario:req.body.nombreusuario,
        apellidousuario:req.body.apellidousuario,
        cedulausuario:req.body.cedulausuario,
        telefonousuario:req.body.telefonousuario,
        direccionusuario:req.body.direccionusuario,
        correousuario:req.body.correousuario
    };
    const query="INSERT INTO usuario (nombreusuario, apellidousuario,"+
        "cedulausuario,telefonousuario,direccionusuario,correousuario)"+
        "VALUES('"+data.nombreusuario+"','"+data.apellidousuario+"','"+
        data.cedulausuario+"','"+data.telefonousuario+"',"+
        "'"+data.direccionusuario+"','"+data.correousuario+"'"+
        ")";
getConnection(function (err, client){
    if(err){
        console.log("No se puede conectar a la base de datos, revise el pool de"+
        +" conexión");
    }
    client.query(query, function(err, result){
        if(!err){
            res.json({status:'Registro Exitoso'});
        }else{
           console.log(err); 
        }
    });
    })
});

//actualizar el usuario
router.post('/usuario/:id', (req, res, next)=>{
    const { id } = req.params;//binding

    const data = {
        nombreusuario: req.body.nombreusuario,
        apellidousuario: req.body.apellidousuario,
        cedulausuario: req.body.cedulausuario,
        telefonousuario: req.body.telefonousuario,
        direccionusuario: req.body.direccionusuario,
        correousuario: req.body.correousuario
    };
    //consulta
    const query = "UPDATE usuario SET nombreusuario=\'"+data.nombreusuario+"\',"+ 
    "apellidousuario=\'"+data.apellidousuario+"\',cedulausuario= \'"+data.cedulausuario+"\',"+
    "telefonousuario=\'"+data.telefonousuario+"\',direccionusuario=\'"+data.direccionusuario+"\',"+
    "correousuario=\'"+data.correousuario+"\' WHERE idusuario='"+id+"\'";
    
    getConnection(function(err, client){
    if(err){
        console.log("No se puede conectar a la base de datos, revise el pool de conexion");
    }

    client.query(query, function(err,result){
        if(!err){
            res.json({status:'Registro exitoso'});
        }
        else{
            console.log(err);
        }
    }); });
});
module.exports=router;

//INSERT INTO `usuario`(`idusuario`, `nombreusuario`, `apellidousuario`, `cedulausuario`, `telefonousuario`, `direccionusuario`, `correousuario`) VALUES 
//('Steeven','Engracia','2350060915','0991224512','Av Quito','saengracia@espe.edu.ec')