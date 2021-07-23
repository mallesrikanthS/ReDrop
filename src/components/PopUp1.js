import {Component } from 'react';
import { useHistory } from 'react-router-dom';


class PopUp1 extends Component {
    constructor(props) {
        super(props);
        //this.ss = history= useHistory();
        this.state={value: ''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
        
    handleChange = (e) => {
        this.props.history.push(`e.target.value`);
      }
    //handleChange(e) {
      //  this.setState ({Value:(e.target.value)});
    //}
    handleSubmit(e) {
        e.preventDefault();
        //this.state.ss.push('this.state.value');
    }

    submitForm() {
        
        this.props.history.push('{this.state.value}');

    }
    
    
    
    render() {
        console.log(this.props.tigger);
    return (this.props.trigger) ? ( 
        
        <div >            
            <button onClick= { ()=> this.props.setTrigger(false)}>close</button>
            <div >
                <form className="form" onSubmit={this.handleSubmit}>
                
                <select onChange={this.handleChange }>
                    <option value='/linechart'>LineChart </option>                   
                    <option value='/barchart'>BarChart </option>
                    <option value='/bchart'>BarChart1 </option>
                                     
                </select>
                <button type='submit' onClick={this.submitForm} >Submit</button> 
                </form>
                
                {this.state.value}
            </div>
            {this.props.children}
            
        </div>
        
    ) : "";
}
}

export default PopUp1


