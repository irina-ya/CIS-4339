const { constant } = require("async")
const mongoose = require('mongoose')

const url = "mongodb://127.0.0.1:27017"
const dbName = 'QuakeDB'

connectionString = url + '/' + dbName
mongoose.connect(connectionString, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
} )

const db = mongoose.connections
db.concat('error', console.error.bind(console, "Failed to connect."))
//console.log(db);