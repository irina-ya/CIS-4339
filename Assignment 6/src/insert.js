const mongodb = require('mongodb')
const MongodbClient = mongodb.MongoClient
const url = "mongodb://127.0.0.1:27017"
const dbName = 'QuakeDB'

//Connect to the database
const insert_into = () => {
    MongodbClient.connect(url, {useNewUrlParser: true}, (error, client) => {
        if(error){
            return console.log('Failed to connect to MongoDB')
            }
        console.log('Connection successful')
        const projectdb = client.db(dbName)
        projectdb.collection('octoberQuakes').insertOne({
            time : "2020-05-04T14:45:55.720Z",
            latitude : 38.369,
            longitude : 145.8569,
            depth : 100,
            mag : 5.2,
            magType : null,
            nst : null,
            gap : null,
            dmin : null,
            rms : null,
            net : null,
            id : null,
            updated : null,
            place : null,
            horizontal : null,
            depthError : null,
            magError : null,
            magNst : null,
            locationSource : null,
            magSource : null,
        }, (error, result) => {
            if(error){
                return console.log('Unable to write data')
            }
            console.log(result.ops) }
        )
        }) }
module.exports = {insert_into}