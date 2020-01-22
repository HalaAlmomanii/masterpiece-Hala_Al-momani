import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Awards from './Awards';
import Arequest from './Arequest';
import AllEvent from './AllEvent';
import AC from './AC';
import NewCategory from'./NewCategory';
export default class Admin extends Component {
    render() {
        return (

            <div>

      
            <Router>
                <div>
            <Route path="/request" component={Arequest}/>
            <Route path="/awards" component={Awards}/>
            <Route path="/admin" component={AllEvent}/>
            <Route path="/Aevent/:id" component={AC}/>
            <Route path="/category" component={NewCategory}/>
            </div>
          </Router>
        </div>
        );
    }
}
