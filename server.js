
const express=require('express');
const app=express();
const startApp=require('./start');


app.use('/employee',startApp);


app.listen(3006,console.log("port is running"));

