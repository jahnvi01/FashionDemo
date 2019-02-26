var express=require('express');
var bodyparser=require('body-parser');
var mysql=require('mysql');
var app=express();
var items=require('./routes/api/items');
app.use(bodyparser.json());
app.use('/api/items',items);
var db=mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "jahnvi123",
    database : "msu",
});
db.connect((err)=>{
    if(err){throw err;}
    else{
        console.log("connected");
    }
});
app.listen(5000);