const mysql=require('mysql');
const express=require('express');
const bodyParser=require('body-parser');
app.use(bodyParser(json));
app.use(bodyParser(urlencoded));
const app=express();
const yes={};
 yes.query=(mysqlConnection)=>{
    mysqlConnection.query("delete from employee where EmpId=?",[],(err,rows)=>
    {
        if(!err){
        console.log("selected")}
        else
        console.log(err);
    });   
    
   
}
module.exports=yes;