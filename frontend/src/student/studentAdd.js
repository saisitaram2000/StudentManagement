import React, { Component } from 'react';
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
            contact:'',
            address:''
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
    }

    render(){
        return(
            <form>
            <h1>Enter the Data fields below</h1>
                <label>
                    FullName:
                    <input name="fullname" type="text" value={this.state.fullname} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <label>
                    10th_Grade:
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
               <label>
                    Address:
                    <input name="address" type="text" value={this.state.address} onChange={this.handleInputChange}/>
               </label>
               <br />
               <br />
               <input type="submit" onClick={this.handleSubmit}/>
            </form>
        );
    }
}