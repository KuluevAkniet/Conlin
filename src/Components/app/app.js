import React from 'react';
import Basic from '../basic/basic';
import Header from '../header/header';
import Avstrian from '../Avstrian/Avstrian';
import French from '../French/French';
import Rom from '../Rom/Rom';
import Upp from '../Upp/Uup';
import {BrowserRouter ,Switch,Route} from "react-router-dom";
import './app.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Basic/>
            <BrowserRouter>
    
           <Switch>
               <Route exact path="/Avstrian" component={()=><Avstrian/>}/>
               <Route exact path="/French" component={()=><French/>}/>
               <Route exact path="/Rom" component={()=><Rom/>}/>
               <Route exact path="/Upp" component={()=><Upp/>}/>
            </Switch>
        </BrowserRouter>
        </div>
    );
};

export default App;