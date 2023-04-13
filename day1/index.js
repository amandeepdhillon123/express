const express= require('express')

const app=express();

app.get('',(req,resp)=>{
    resp.send("Hello this is home page")
});
app.get('/help',(req,resp)=>{
    resp.send("Hello this is help page")
});
app.get('/about',(req,resp)=>{
    resp.send("Hello this is about page")
});
app.listen(2150)