import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Profile from './Profile';
import Landing from './Landing';
import EventDetails from './EventDetails';
import Similar from './Similar';
export default class User extends Component{
   
    render()
    {
       
        return (
          <div>

      
    <Router>
        <div>
   


    <Route path="/profile" component={Profile}/>
    <Route path="/home" component={Landing}/>
    <Route path="/similar" component={Similar}/>
    <Route path="/event/:id" render={props=><EventDetails{...props}/>}/>
    
    </div>
  </Router>
</div>
        )
}
}


