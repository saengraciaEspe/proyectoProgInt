const router = require('express').Router()
const conexion = require('./conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from plato';
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

// get un plato
router.get('/:idplato',(req, res)=>{
    const {idplato} = req.params
    let sql ='select * from plato where idplato = ?';
    conexion.query(sql,[idplato],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar plato
router.post('/',( req, res)=>{
    const{descplato, precioplato} = req.body

    let sql = `insert into plato(descplato, precioplato) values('${descplato}','${precioplato}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'plato agregado'})
        }
    })
})

//eliminar 
router.delete('/:idplato',(req, res)=>{
    const{idplato} = req.params;

    let sql =`delete from plato where idplato = '${Number(idplato)}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:idplato',(req, res)=>{
    const{idplato}=req.params
    const{descplato, precioplato} = req.body

    let sql = `update plato set 
                descplato ='${descplato}',
                precioplato='${precioplato}'
                where id_equipo = '${idplato}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'plato modificado'})
        }
    })

})
//----------------------------------

module.exports = router