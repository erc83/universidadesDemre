const express = require('express')
const morgan= require('morgan');
const exphbs = require("express-handlebars")
const app = express();


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
    res.json({'title': 'hello word'})
})

app.post('/', (req,res)=>{
    res.json({'title': 'hello word'})
})

app.put('/', (req,res)=>{
    res.json({'title': 'hello word'})
})

app.delete('/', (req,res)=>{
    res.json({'title': 'hello word'})
})

app.listen(3000,()=>{
    console.log(`servidor ${app.get('port')} funcionando ok`)
})
