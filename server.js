const express = require('express');
const path=require('path');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'public')));
app.use('/api',require('./route/api').route);

app.listen(4567,() => console.log('server started at http://localhost:4567/'));


