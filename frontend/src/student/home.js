import React,{Component} from 'react';
export default class Home extends Component{
    constructor(props){
        super(props);
    }
    greetUser=props=>{
        return(
            <center>
                  <h1>
                      Welcome Mr. {props.name} , here ur project is ready
                  </h1>
            </center>
        );
    }
    render(){
    return(
        <div>
           <this.greetUser name="SITA RAM" />
        </div>
    );
    }
}