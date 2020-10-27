import React,{Component} from 'react';
import "./student.css"
const axios=require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
export default class studentsList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        setTimeout(function() { //Start the timer
         this.setState({render: true}) //After 1 second, set render to true
     }.bind(this), 1000)
     //console.log(process.env.REACT_APP_BACKEND_HOST);
       const res =await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/users`);
       this.state.data=await res.data;
     }
     render () {
        return (
          this.state.data.map((stud)=>(
            <div className="studentlist" key={stud.StudentID}>
              <a href={window.location.host+process.env.REACT_APP_GITHUB_REPONAME+'/'+stud.StudentID} className="studentlistitem">{stud.StudentID+'. '+stud.FullName}</a>
            </div>
          ))
        )
     }
}