var mysql=require('mysql');
var pool=mysql.createPool({
    host        :   'localhost',
    user        :   'root',
    password    :   'root',
    database    :   'ejem'
});


var getConnection=function(cb){

    pool.getConnection(function (err, connection){

        if(err){
            return cb (err);
        }
        cb(null,connection);
    });
};
module.exports=getConnection;