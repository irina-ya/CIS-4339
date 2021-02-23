const mongoose = require('mongoose')

const policySchema = new mongoose.Schema({
    id : { type: String },
    policyName: {type: String},
    costPerMonth : {type: String},
    coveredIndividuals : {type: String },
    includedServices : {type: String}
})

const policies = mongoose.model('policies', policySchema)

module.exports = policies;