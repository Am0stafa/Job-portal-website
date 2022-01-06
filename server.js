const express = require('express');
const cors = require('cors');
const Routes = require('./SERVER/Routes')

const API_PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public`));




app.use('/api', Routes);




app.listen(API_PORT, ()=>{
    console.log('listening on port '+API_PORT);
})