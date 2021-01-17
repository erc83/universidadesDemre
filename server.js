const express = require('express')
const app = express();
const exphbs = require("express-handlebars")




//pagina de inicio html

app.get("/", (req, res)=>{
    res.sendFile("/home/erc83/weekendCode/univeridadesDemre/views/index.html")
})

// app.engine(
//     "handlebars", exphbs({
//         layoutDir: __dirname + "/views",
//         partialDir: __dirname + "/views/component"
//     })
// );

// app.set("view engine", "handlebars");


app.listen(3000,()=>{
    console.log("servidor disponible localhost:3000");
})