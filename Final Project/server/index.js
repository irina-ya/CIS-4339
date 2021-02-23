const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    userRouter = require('./routers/userRouter')
    cors = require('cors'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3000
    policies = require('./models/policyModel')

require('./mongoose_conn')

const app = express()
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json())
app.use(userRouter)

// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'It works!'
    })
})

app.get('/policies', async (req, res) => {
    try{
        const policy = await policies.find({})
        res.send(policy)
    } catch(error){
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Projects are being managed on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})