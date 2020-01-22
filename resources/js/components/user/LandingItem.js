import React, { Component,BrowserRouter,Route } from 'react';



export default class LandingItem extends Component {
  
   

    render() {
        return (
            <div class="col-4 col-sm-4 col-md-4">
            <div class="next-event-wrap">
                
    
                <header class="entry-header">
                    <h3 class="entry-title">{this.props.elem.title}</h3>
                    <div class="event-rating">{this.props.elem.category.type}</div>
                 <div class="posted-date"><span>{this.props.elem.time}</span></div>
                 <div class="posted-date"><span> {this.props.elem.Date}</span></div>
                 
                </header>
    
                <div class="entry-content">
              
                {this.props.elem.description}
                   
                  
                </div>
    
                <footer class="entry-footer">
               
                <a href={"/event/"+this.props.elem.id}>Details</a>
                <br></br>
                </footer>
      <br></br><br></br>
        </div>
        </div>
            
        );
    }
}