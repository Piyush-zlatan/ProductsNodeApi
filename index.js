const express = require('express');
const app = express();
const port = 8000;      //Seting port

const db = require('./config/mongoose');        //Importing moongoose

app.use(express.urlencoded());      //using middlewares 
app.use(express.json())
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running on port: ${port}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);

})