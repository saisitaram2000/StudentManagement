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
       const res =await axios.get('http://localhost:4000/')
       this.state.data=await res.data;
     }
     render () {
        return (
          this.state.data.map((stud)=>(
            <div class=" studentlist">
              <a href={"users/"+stud.StudentID} class="studentlistitem">{stud.StudentID+'. '+stud.FullName}</a>
            </div>
          ))
        )
     }
}