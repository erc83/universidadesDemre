const express = require('express')
const morgan= require('morgan');
const app = express();
//const { getUniversidades } = require ("./db/index") // teniendo las bases de datos la utilizamos


//configurnado el server
app.set('port', process.env.PORT || 3000)
app.set('json spaces',2)
app.set('view engine', 'ejs')

//empezando el servidor
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//rutas

app.get('/', (req,res)=>{
    res.send({ 'soy la ruta raiz' })
})




app.listen(3000,()=>{
    console.log(`servidor ${app.get('port')} funcionando ok`)
})