const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

const INDEX_ROUTER = require('./router/index');


app.use(express.json());
app.use(INDEX_ROUTER);


app.get('/', (req,res) => {
    res.send('hello world')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})