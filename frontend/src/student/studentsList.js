import React,{Component} from 'react';
import "./student.css"
const axios=require('axios').default;

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
       const res =await axios.get('http://localhost:5000/users')
       this.state.data=await res.data;
     }
     render () {
        return (
          this.state.data.map((stud)=>(
            <div className="studentlist">
              <a href={"http://localhost:3000/"+stud.StudentID} className="studentlistitem">{stud.StudentID+'. '+stud.FullName}</a>
            </div>
          ))
        )
     }
}