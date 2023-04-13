const express= require('express')

const app=express();

app.get('',(req,resp) =>{

    resp.send('<h1>i am home page</h1>  <a href="/about">about page</a>')
})

app.get('/name',(req,resp) =>{

    resp.send(`<h1> i am ${req.query.name}</h1>`)
})
app.get('/about',(req,resp) =>{

    resp.send('<h1>i am about page</h1> <a href="/help">help page</a>')
})
app.get('/help',(req,resp) =>{

    resp.send([{
        name:"amandeep",
        email:"aman@gmail.com"
    },
    {
        name:"aman",
        email:"aman@gmail.com"
    },
    {
        name:"amandeep",
        email:"aman@gmail.com"
    },
    {
        name:"aman",
        email:"aman@gmail.com"
    }

])
})

app.listen(2151)