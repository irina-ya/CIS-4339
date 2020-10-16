const fetch = require('sync-fetch')
const getCurrencies = (abv) => fetch('https://api.exchangeratesapi.io/latest?base=' + abv, { }).json()



const getallRates = (abv) => {
    let currencyRates = []
    let data = getCurrencies(abv)
    
    currencyRates.push(data.rates)
    
    return currencyRates
    
}

module.exports = {getCurrencies, getallRates}