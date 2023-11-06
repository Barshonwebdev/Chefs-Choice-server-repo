const express= require('express');
const app= express();
const port=process.env.PORT || 5000;

const cors= require('cors');
app.use(cors());

const chefs= require('./data/chefData.json')
app.get('/', (req,res)=>{
    res.send (chefs);
})

app.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedChef=chefs.find(c=>c.id===id);
    res.send(selectedChef);
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`) 
})