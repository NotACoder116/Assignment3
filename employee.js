const mysql = require('mysql');
const express=require('express');
const dbconfig=require('./db-config');
const queries=require('./selqueries');
const app=express();
const yes={};

'use strict'

  yes.getEmployee=(empId) =>{
  return new Promise(async(resolve, reject)=> {
   let mysqlConnection; 
    try {
       mysqlConnection = await mysql.createConnection(dbconfig);

      console.log('Connected to database');
      let result = await mysqlConnection.connect(function(err) {
        if (!err)
        console.log("Connected!");
        else
        console.log("connection failed"+JSON.stringify(err,undefined,2));
        });
      setTimeout(()=>
       {
          queries.query(mysqlConnection)
          
       },1000)

       setTimeout(()=>{

       })
      
      console.log('Query executed' );
      } catch (err) {
       console.log('Error occurred', err);
       reject(err);
       }
    //     finally 
    //    {
    //     // if (mysqlConnection) {
    //     //   try {   
    //     //      // await mysqlConnection.end();

    //     //     console.log('Connection closed');

    //     // } catch (err) {

    //     //   console.log('Error closing connection', err);
    //     // }
    // //  }
    // }
  });
}

module.exports=yes;

