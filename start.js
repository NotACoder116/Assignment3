const employee=require('./employee');
const mysql=require('mysql');
const dbConfig=require('./db-config');

const startApp=async()=> {
    try {
        console.log("yes");
    //  await mysql.createConnection(dbConfig);
       let emp = await employee.getEmployee(1);
        
      } catch (err) {
      console.log('Opps, an error occurred', err);
     }
   }
   module.exports=startApp;