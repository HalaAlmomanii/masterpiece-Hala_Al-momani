import React, { Component,BrowserRouter,Route } from 'react';
import {Link } from 'react-router-dom'
export default class SimilarEvent extends Component {  
    

  
  
        render() {
            return (
                
       <div class='row'>
            {this.props.elem.map((event,index) => (
                <div  class="col-4 col-sm-4 col-md-4">
                 <div class="next-event-wrap">
                     
         
                     <header class="entry-header">
                         <h3 class="entry-title">{event.title}</h3>
                         <div class="event-rating">{event.category.type}</div>
                      <div class="posted-date"><span>{event.Time}</span></div>
                      <div class="posted-date"><span> {event.Date}</span></div>
                      
                     </header>
         
                     <div class="entry-content">
                   
                     {event.description}<br></br>
                     {event.price}
                        
                       
                     </div>
         
                     <footer class="entry-footer">
                    
                     <Link to={"/event/"+event.id}>Details</Link>
                     <br></br>
                     </footer>
           <br></br><br></br>
             </div>
             
            </div>
                
            ))}
            </div>);
        }

    }