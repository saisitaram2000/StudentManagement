import React, { Component } from 'react';
import "./student.css";
const axios = require('axios').default;
export default class UserData extends Component{
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            tenth_grade:'',
            intermarks:'',
            mains:'',
            advance:'',
            contact:''
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange= (event) =>{
        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val});
    }
    handleSubmit= (event) =>{
        event.preventDefault();
        alert('response submitted successfully');
        axios.post('http://localhost:5000/users/',{
            fullname:this.state.fullname,
            tenth_grade:this.state.tenth_grade,
            intermarks:this.state.intermarks,
            mains:this.state.mains,
            advance:this.state.advance,
            contact:this.state.contact
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
        this.setState({
            fullname:'',
            tenth_grade:'',
            intermarks:'',
            mains:'',
            advance:'',
            contact:''
        });
    }

    render(){
        return(
            <div className="App">
            <center>
                <h1>Enter the Data fields below</h1>
            </center>
            <form>
            <h2>STUDENT FORM</h2>
                <label>
                    FullName:
                    <input name="fullname" type="text" value={this.state.fullname} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <label>
                    Tenth_Grade:
                    <input name="tenth_grade" type="number" step="any" value={this.state.tenth_grade} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <label>
                    IntermediateMarks:
                    <input name="intermarks" type="number" value={this.state.intermarks} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <label>
                    MainsRank:
                    <input name="mains" type="number" value={this.state.mains} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <label>
                    JEEAdvanceRank:
                    <input name="advance" type="number" value={this.state.advance} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <label>
                    ContactNo:
                    <input name="contact" type="text" value={this.state.contact} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <input type="submit" className="submit" onClick={this.handleSubmit}/>
            </form>
            </div>
        );
    }
}