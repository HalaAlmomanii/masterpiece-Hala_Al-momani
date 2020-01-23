import React, { Component,BrowserRouter,Route } from 'react';

import {Link } from 'react-router-dom'

export default class FavUserEvent extends Component {  
    
    constructor(props) {
        super(props);
        this.state = {fav:""};
        

    }

    
    render() {
        
   

        return (

            <div class="col-3 col-sm-6 col-md-6">
            <div class="next-event-wrap">
           
                <header class="entry-header">
                    <h3> <a href={"event/"+this.props.elem.id}>{this.props.elem.title}</a></h3>
   
                
                    <button class="btn" onClick={this.props.remove.bind(this,this.props.elem.id)}>Remove From BookMark</button>
                </header>
       
      <br></br>
        </div>
        </div>
          
      

          
        );
    }
}