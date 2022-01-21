const express = require('express');

const connect = require('./config/db');

const cors = require('cors');

const app = express();
 

app.use(express.json());
app.use(cors());


const start = async () =>{
    await connect();
    app.listen(3011, ()=>{
        console.log('listening on port 3010')
    })
}

module.exports = {app, start}
