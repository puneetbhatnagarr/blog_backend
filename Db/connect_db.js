const mongoose = require('mongoose');


const connectdb = ()=>{
    return mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('connect sucessfully')

    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    connectdb
}