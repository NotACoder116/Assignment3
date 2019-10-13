const mysql=require('mysql');
const express=require('express');
const app=express();
const yes={};
 yes.query=(mysqlConnection)=>{
    mysqlConnection.query("select * from employee",(err,rows)=>
    {
        if(!err){
        console.log("selected")}
        else
        console.log(err);
    });   
   
}
module.exports=yes;