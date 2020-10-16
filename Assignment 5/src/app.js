const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const fetchCurrency = require("./fetchCurrency")
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.post("/register", (req, res) => {
    res.render('register.ejs')
})

app.post("/results", (req, res) => {
    const selected_currency = req.body.curAbv
    res.render('results.ejs', {baseCur: fetchCurrency.getCurrencies(selected_currency),
    allRates: fetchCurrency.getallRates(selected_currency)})
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})