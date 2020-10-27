var express = require('express');
var router = express.Router();
var url = require('url');
const dotenv = require('dotenv');
dotenv.config();
/* GET users listing. */

const mysql=require('mysql');


const con=mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  database: process.env.SQL_DB,
  password: process.env.SQL_PASSWORD
});

const addData=async(data)=>{
  try{
    var keys='(FullName,Tenth_Grade,IntermediateMarks,MainsRank,JEEAdvanceRank,ContactNo)';
    var newdata="('"+data.fullname+"','"+data.tenth_grade+"','"+data.intermarks+"','"+data.mains+"','"+data.advance+"','"+data.contact+"')";
    var sql_new = "INSERT INTO Students "+keys+" VALUES "+newdata+";";
   con.query(sql_new,function(err,result){
     if(err) {
      console.log(err); 
      throw err;
     }
     console.log("new record inserted");
   });
}catch(error){
  console.log(error);
}
}
router.post('/',function(req,res,next){
	 addData(req.body);
	 res.send("done");
})
router.get('/:studentid',function(req,res,next){
  var ID=req.params.studentid;
   con.query('SELECT * FROM Students WHERE StudentID=?',ID,function(err,result,fields){
    if(err){
      res.send('Error occured');
      throw err;
    }
    res.json(result);
  })
})
router.get('/', function(req, res, next) {
  con.query("SELECT * FROM Students",function(err,result,fields){
    if(err){
      res.send('Error occured');
      throw err;
    }
    res.json(result);
  })
});



module.exports = router;
