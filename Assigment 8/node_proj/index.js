const express = require("express")
app = express();
const data = require('./teams.json');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', async(req, res) => {
    try {
        const list = data;
        res.send(list)
    } catch (error){
        res.status(500).send(error)
    }
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})
