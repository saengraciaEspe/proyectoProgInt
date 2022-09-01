var mysql=require('mysql');
var conexion=mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   'root',
    database    :   'ejem'
});

conexion.connect((err)=>{

    if(err){
        console.log("link to db failed"+err)
    }else{
        console.log("link to db success!!")
    }

});

module.exports=conexion;