import React from 'react';
import Basic from '../Basic/baisc' ;
import Header from "../Header/Header"
import Avstrian from '../Avstrian/Avstrian';
import French from '../French/French';
import Rom from '../Rom/Rom';
import Upp from '../Upp/Uup';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import './app.css';

const App = () => {
    return (

        <Router>
                    <div>
             <Header/> 
            <Basic/> 
      
    
           <Routes>
               <Route exact path="/Avstrian" element={<Avstrian/>}/>
               <Route exact path="/French" element={<French/>}/>
               <Route exact path="/Rom" element={<Rom/>}/>
               <Route exact path="/Upp" element={<Upp/>}/>
            </Routes>
  
        </div>
        </Router>
    )
};

export default App;