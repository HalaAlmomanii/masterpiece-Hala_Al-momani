import React, { Component,BrowserRouter,Route } from 'react';
import {Link } from 'react-router-dom'
import axios from 'axios';
import Edit from './Edit';

export default class Pending extends Component {
    constructor(props) {
        super(props);
        this.state = {editdata:[]};
    }
    
    
    render() {
        return (
            <div class="col-3 col-sm-6 col-md-4">
            <div>
            <div class="next-event-wrap">
               

                <header class="entry-header">
                    <h3 class="entry-title">{this.props.elem.title}</h3>

                    <div class="posted-date"><span>{this.props.elem.Date}</span></div>
                    <div class="posted-date"><span>{this.props.elem.time}</span></div>
                </header>

                <div class="entry-content">
                    <p>{this.props.elem.description}</p>
                    <Link  class="btn gradient-bg" style={{color:'black'}} to={"/data/"+this.props.elem.id}><strong>Edit</strong></Link>
                </div>

                <footer class="entry-footer">
                <button class="btn gradient-sm" onClick={this.props.remove.bind(this,this.props.elem.id)}><strong>Delete</strong></button>
                
                </footer>
                <br></br>
            </div>
       </div>
        </div>
           
              
            
            
                
            
           
            
            
            
           
            
          
        );
    }
}
