import React, { Component,BrowserRouter,Route } from 'react';

import {Link } from 'react-router-dom'

export default class Reservation extends Component {    
    render() {
        return (
            <div class="col-3 col-sm-3 col-md-3">
            <div class="next-event-wrap">
                
    
                <header class="entry-header">
                    <h3> <a href={"event/"+this.props.elem.id}>{this.props.elem.title}</a></h3>
   
                 <div class="posted-date">Date <span>{this.props.elem.Date}</span></div>
                 <div class="posted-date">Time <span>{this.props.elem.time}</span></div>
                 
                </header>
    
                <div class="entry-content">
                <img src={"/storage/"+this.props.elem.photo}></img>
                </div>
    
                
      <br></br>
        </div>
        </div>

        );
    }
}