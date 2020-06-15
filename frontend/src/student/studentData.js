import React,{Component} from 'react';
import "./student.css"
const axios=require('axios').default;

export default class StudentData extend Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    async componentDidMount(){
        const path=window.location.pathname.substring(8);
        console.log(path);
        setTimeout(function(){
            this.setState({render:true});
        }.bind(this),1000);

        const res=await axios.get('http://localhost:4000/api/student/'+path);
        this.state.data=res.data;
    }
    render(){
        return(
            <form>
            <h1>Hey you got your Details!</h1>
                <label>
                    FullName:
                    <p>this.state.FullName</p>
               </label>
               <br />
               <br />
               <label>
                    10th_Grade:
                    <p>this.state.10th_Grade</p>
               </label>
               <br />
               <br />
               <label>
                    IntermediateMarks:
                    <p>this.state.IntermediateMarks</p>
               </label>
               <br />
               <br />
               <label>
                    MainsRank:
                    <p>this.state.MainsRank</p>
               </label>
               <br />
               <br />
               <label>
                    JEEAdvanceRank:
                    <p>this.state.JEEAdvanceRank</p>
               </label>
               <br />
               <br />
               <label>
                    ContactNo:
                    <p>this.state.ContactNo</p>
               </label>
               <br />
               <br />
            </form>
        )
    }
}