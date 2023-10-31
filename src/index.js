require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const auth = require('../routes/authRoutes');


const port = 8080;
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/News_api_authentication_authorization", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


mongoose.connection.on('open', () => {
    console.log('connected to the Db');

    app.get('/', async (req, res) => {
        res.status(200).json('this is the best news API');
    })

    app.use('/api', auth);

   


    app.listen(port, (req, res) => {
        console.log(`the server is up and running on port: ${port}`);
    })
})

