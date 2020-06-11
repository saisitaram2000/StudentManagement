var express = require('express');
var router = express.Router();

/* GET users listing. */
const mysql=require('mysql');

const con=mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'StudentsData'
});
con.query('SELECT * FROM students',(err,rows)=>{
  if(err)throw err;
  console.log('connection established');
  console.log(rows);
});

router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  con.query("SELECT * FROM Students",function(err,result,fields){
    if(err){
      res.send('Error occured');
      throw err;
    }
    console.log(result);
    res.json(result);
  })
});



module.exports = router;
