import './Popup.css';
//import '../App.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function PopUp(props) {
    let history= useHistory();
    let [value, setValue] = useState();

    const handleChange = (e)=>{
        const newvalue = e.target.value;
        setValue(newvalue);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        }
    const submitForm = (e)=> { 
        const val = value;
        //console.log(e.target.form[0][1].outerHTML, value); 
        history.push(val);  
           
    }
    //console.log(value);
    return (props.trigger) ? ( 
        
        <div className='popup' >            
            <div className='popup-inner '>
            <button className='close-btn' onClick= { ()=> props.setTrigger(false)}>close</button>
                <form className="form" onSubmit={handleSubmit}>
                                
                <select onChange={ handleChange}>
                    <option value='/linechart'>LineChart </option>                   
                    <option value='/barchart2'>BarChart2 </option>
                    <option value='/bchart'>BChart </option>
                    <option value='/barchart1'>BarChart1 </option>
                                     
                </select>
                <button type='submit' onClick={()=> {history.push(value)}} >Submit</button> 
                </form>                
                
            </div>
            {props.children}
            
        </div>
        
    ) : "";
}

export default PopUp
