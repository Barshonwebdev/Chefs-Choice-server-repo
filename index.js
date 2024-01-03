const express= require('express');
const cors = require('cors');
const app= express();
require("dotenv").config();
app.use(
  cors()
);
const port=process.env.port|| 6000;



const chefs= require('./data/chefData.json')


app.get('/',(req,res)=>{
       

    res.send('chef`s choice server running')
})
app.get('/chefs', (req,res)=>{
       

    res.send (chefs);
})

app.get('/chefs/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedChef=chefs.find(c=>c.id===id);
    
    res.send(selectedChef);
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`) 
})