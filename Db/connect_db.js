const mongoose = require('mongoose');
database_url = "mongodb+srv://puneet:puneet@cluster0.0mcan.mongodb.net/blogapi?retryWrites=true&w=majority"

const connectdb = ()=>{
    return mongoose.connect(database_url).then(()=>{
        console.log('connect sucessfully')

    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    connectdb
}