
require("dotenv").config();

var express = require('express');

const app = express();
const cors = require("cors")

const cookRouter=require("./routes/cookRouter")
const verbindeDB = require("./mongo-db");
verbindeDB()


app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/cook",cookRouter)

app.use(express.static('uploads'))
app.use(express.static('public'))



app.get('*', (req,res, next) =>{
    res.status(404).send("Diesen Pfad gibt es nicht")
   
    
  })
  
 
  
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("connnect!" + port) })

