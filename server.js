const express = require('express');
const cors = require('cors');
const Routes = require('./SERVER/Routes')
var bodyParser = require('body-parser')

const API_PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`));



app.use('/api', Routes);




app.listen(API_PORT, ()=>{
    console.log('listening on port '+API_PORT);
})