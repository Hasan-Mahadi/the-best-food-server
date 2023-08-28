const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// const port = process.env.PORT || 5000;

const allfoods = require("./data/Items.json");

app.get('/',(req,res) =>{
    res.json({message: "hello server running"});
});

app.get('/allData',(req,res)=>{
  res.send(allfoods);
})




app.listen(5000, () => {
    console.log('server is running on port 5000');
});

