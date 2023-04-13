const express= require("express")

const app= express();

app.get("",(req,resp) =>{

    resp.send(`hello i am ${req.query.name}`)
})
app.get("/help",(req,resp) =>{

    resp.send(`hello i am ${req.query.name}`)
})
app.get("/about",(req,resp) =>{

    resp.send(`hello i am ${req.query.name}`)
})

app.listen(2150)