const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
const {Router} = require('express')
const {connectdb} = require('./Db/connect_db.js')
const web = require('./routes/web.js');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
  });
var cors = require('cors')
app.use(cors());
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