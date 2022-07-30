const express = require('express')
const app = express()
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
   
    next(); 
});

const port = process.env.PORT || 3000;
const cors=require('cors');
app.use(cors());
var bodyParser = require('body-parser')
const {connectdb} = require('./Db/connect_db.js')
const web = require('./routes/web.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

connectdb();

app.use("/api/pn",web)



  
app.get("/",(req,res)=>{
    res.send('hello i am api')

})

app.listen(port,()=>{
    console.log("server is running")
})