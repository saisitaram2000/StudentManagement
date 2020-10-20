var express = require('express');
var router = express.Router();
var url = require('url');

/* GET users listing. */

const mysql=require('mysql');


const con=mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'StudentsData'
});

const addData=async(data)=>{
  try{
    console.log(data.FullName);
    var keys='(FullName,Tenth_Grade,IntermediateMarks,MainsRank,JEEAdvanceRank,ContactNo)';
    var newdata="('"+data.FullName+"','"+data.Tenth_Grade+"','"+data.IntermediateMarks+"','"+data.MainsRank+"','"+data.JEEAdvanceRank+"','"+data.ContactNo+"')";
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
router.post('/',function(res,req,next){
  //res.statusCode(200).send("hi");
  console.log('hi');
  //  console.log(req.body.StudentID);
  //  console.log("in studentadd");
	//  addData(req.body);
	 res.send("done");
})
router.get('/:studentid',function(res,req,next){
  // var tempID=url.parse(req.url,true);
  //var ID=tempID.pathname.substring(3);
  var ID=req.params.studentid;
  console.log(ID);
 // con.query("SELECT * FROM Students WHERE StudentID='"+ID+"'",function(err,result,fields){
   con.query('SELECT * FROM Students WHERE StudentID=?',ID,function(err,result,fields){
    if(err){
      res.send('Error occured');
      throw err;
    }
    console.log(result);
    res.json(result);
  })
})
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
