const express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    quakes = require('./model/octoberQuakes'),
    app = express(),
    methodOverride = require('method-override');
    

require('./mongoose_conn')

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    try{
        const quake = await quakes.find({})
        res.render('index', { quake: quake })
    } catch(error){
        res.status(500).send(error);
    }
});

app.get("/add", async (req, res) => {
    try{
        //Connect to DB to populate dropdown
        const quake = await quakes.find({})
        res.render('add', { quake: quake })
    } catch(error){
        res.status(500).send(error);
    }
});

app.get("/delete", async (req, res) => {
    try{
        //Connect to DB to populate dropdown
        const quake = await quakes.find({})
        res.render('delete', { quake: quake })
    } catch(error){
        res.status(500).send(error);
    }
});

app.post("/newquake", async (req, res) => {
    try {
        const quake = new quakes(req.body);
        await quake.save();
        res.render('newquake', {quake: quake})
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/del_confirm", async (req, res) => {
    try {
        
        const quake = await quakes.find({})
        
        //delete the quake based on ID
        await quakes.deleteOne(req.body);
        res.render('del_confirm', {quake: quake})
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/result", async (req, res) => {
    try {
        const quake = await quakes.find({});
        const search = await quakes.find(req.body);
        console.log(search.length)
        res.render('result', {search: search})
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})


app.listen(3000, () => {
    console.log("http://localhost:3000")
})
