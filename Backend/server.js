require('dotenv').config()

const express = require('express');
const treatRoute = require('./Ruotes/treat')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = process.env.PORT;

// MiddleWare Global
app.use(express.json());
app.use(cors());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/api/treats',treatRoute);


//*Connect to the DB
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(port, ()=>{
            console.log('Server is Running!');
        })
    })
    .catch((e)=>{
        console.log(e.message);
    })

