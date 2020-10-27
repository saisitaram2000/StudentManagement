import React,{Component} from 'react';
import "./student.css"
const axios=require('axios').default;

export default class studentData extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    async componentDidMount(){
        const path=window.location.pathname.substring(1);
        setTimeout(function(){
            this.setState({render:true});
        }.bind(this),1000);

        const res=await axios.get('http://localhost:5000/users/'+path);
       
        this.setState({data:res.data[0]});
    }
    render(){
        return(
            
          <div className="flex-container">
                <div className="flex-item">
                    <h2>STUDENT DETAILS</h2>
                </div>
                <div className="flex-item">
                    <label>
                        FullName :
                    </label>
                    <p> {this.state.data.FullName}</p>
                </div>
                <div className="flex-item">
                    <label>
                        10th_Grade :   
                    </label>
                    <p>{ this.state.data.Tenth_Grade}</p>
                </div>
                <div className="flex-item">
                    <label>
                        IntermediateMarks :
                    </label>
                    <p>{ this.state.data.IntermediateMarks}</p>
                </div>
                <div className="flex-item">
                    <label>
                        MainsRank :
                    </label>
                    <p>{ this.state.data.MainsRank}</p>
                </div>
                <div className="flex-item">
                    <label>
                        JEEAdvanceRank :
                    </label>
                    <p>{ this.state.data.JEEAdvanceRank}</p>
                </div>
                <div className="flex-item">
                    <label>
                        ContactNo :
                    </label>
                    <p>{ this.state.data.ContactNo}</p>
                </div>
          </div>
                
        )
    }
}