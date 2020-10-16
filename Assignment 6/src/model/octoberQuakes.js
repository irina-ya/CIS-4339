const mongoose = require('mongoose')

const quakeSchema = mongoose.Schema({
    id : { type: String},
    time : {type: String},
    latitude : {type: Number},
    longitude : {type: Number},
    depth : {type: Number},
    mag : {type: Number},
    magType : {type: String},
    gap : {type: Number},
    place : {type: String},
    depthError : {type: Number},
    magError : {type: Number},
    locationSource :{type: String},
    magSource : {type: String}
});

const quakes = mongoose.model('octoberquakes', quakeSchema)

module.exports = quakes;
