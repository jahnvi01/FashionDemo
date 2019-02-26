var express=require('express');
var router =express.Router();
var mysql=require('mysql');
var db=mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "jahnvi123",
    database : "msu",
});
db.connect((err)=>{
    if(err){throw err;}
    else{console.log("connected")};
    });
router.get('/',function(req,res){
    var sql="select img from `TABLE 2`";
    db.query(sql,(err,arr)=>{
        if(err) throw err;
        res.json(arr);
    })
})
router.post('/',(req,res)=>{
 
    var article =req.body.article;
    var style=req.body.style;
    var date=req.body.date;
if(date=="23oct_06nov"){
 var table="`TABLE 2`";
}
else if(date=="22aug_12sep"){
    var table="`TABLE 3`";
}
 else if(date=="13sep_26sep"){
    var table="`TABLE 4`";
}  
var sql=`select * from ${table} where article_type="${article}" AND styletype="${style}"`;
    
    db.query(sql,(err,arr)=>{
    if(err)throw err;
    console.log("hi");
console.log(arr);
    res.json(arr);
    });
});
    module.exports=router;