import React,{Component} from 'react';
import "./student.css"
const axios=require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
export default class studentData extends Component{

    constructor(props){
        super(props);
        this.state={
            data:{}
        };
    }

    async componentDidMount(){
        setTimeout(function(){
            this.setState({render:true});
        }.bind(this),1000);

        const res=await axios.get(process.env.REACT_APP_BACKEND_HOST+'/users/'+this.props.match.params.studentid);
       
        this.setState({data:res.data[0]});
    }
    render(){
        //console.log(this.props.match.params.studentid);
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