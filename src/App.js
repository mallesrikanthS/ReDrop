import './App.css';
import BChart from './components/BarChart';
import BarChart1 from './components/BarChart1';
import BarChart2 from './components/BarChart2';

import LineChart  from './components/LineChart';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';
import PopUp from './components/PopUp';
import PopUp1 from './components/PopUp1';
import { BarChart } from 'react-bootstrap-icons';

function App() {
  const [butPop, setButPop] = useState(false);  
    
  return (   
  <> 
    <Router>
            
        <div className="row">
        <div className="col-6">
          <div className='navbar justify-content-end'>
            <Link to="/bchart" data-toggle="tooltip" title="Bchart"> <i class="bi bi-house-door-fill"></i>Home</Link>              
            <Link to="/barchart2" data-toggle="tooltip" title="Barchart2"> <i class="bi bi-bricks"></i></Link>
            <button onClick= {()=> setButPop(!butPop) }><i class="bi bi-funnel-fill"></i></button>
            <div className='justify-contain-right'><PopUp trigger={butPop} setTrigger={setButPop} > 
            </PopUp>
            </div>
                                      
            <Link to="/barchart1" data-toggle="tooltip" title="Barchart1"> <i className="bi bi-file-x-fill"></i></Link>
            
          </div>               
          <div>
          
          <Switch>
          
          <Route path="/barchart1" exact component={BarChart1} />
          <Route path="/barchart2" exact component={BarChart2} />
          <Route path="/bchart" exact component={BChart} />
          <Route path="/linechart" exact component={LineChart} />
          </Switch>
          </div>      
        </div>

        <div className="col-6">
          <div className='navbar justify-content-end'>
            
          </div>   
          <div>
          <LineChart />
          </div>      
        </div>
      
      </div>            
                
    </Router>
        
        
    </>
  );
}

export default App;
