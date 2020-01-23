import React, { Component } from 'react';
import axios from 'axios';



export default class UserInfo extends Component {

   
    render() {
        return (
         
         
<div class="container" >
 <div class="row">
     <div class="next-events-section-header">
<h2 class="entry-title">Profile</h2>
         </div>
         </div>
         
        
         
         
                <div class="upcoming-events-list card bg-white mb-3" style={{border:'none'}} >
                    <div class="upcoming-event-wrap flex flex-wrap justify-content-between align-items-center">
                        <div></div>
                       
                 <figure class="events-thumbnail">
                     
                 <img class="rounded-circle"  src={this.props.elem.photo!==null?"/storage/"+this.props.elem.photo:"/images/profile-icon-png-898.png"}/>
                        </figure>

                        

                        <header class="entry-header">
                            <h3 class="entry-title">{this.props.elem.name}</h3>

                            <div class="posted-date">
                            <div >Joined Since:<span class="event-date-time"> {this.props.elem.created_at.slice(0,4)}</span></div>
                            </div>
                            
                            <div class="posted-date">
                            <div >E-mail:<span class="event-date-time">  {this.props.elem.email}</span></div>
                            </div>
                            
                       
                            
                        </header>

                      

                   
                        </div>
                        <div class="modal-footer upcoming-event-wrap ">

                        <div style={{margin:'auto'}} class="entry-meta">
                            <div class="event-date">
                         {this.props.elem.point}<span>Points</span>
                            </div>
                        </div>
                        <div style={{margin:'auto'}} class="entry-meta">
                            <div class="event-date">
                         {this.props.elem.reservation.length}<span>Booking</span>
                            </div>
                        </div>
                        </div>
                        <div class="modal-footer " >
                            
                <div class="container">
                 <div class=" flex flex-wrap justify-content-between  "  > 
                    <button   class="btn dark-purple" onClick={this.props.reservation}>Reservation</button>
                    <button  class="btn dark-purple"onClick={this.props.award}>Awards</button>
                    <button   class="btn dark-purple" onClick={this.props.profile}>Edit</button>
                    <button  class="btn dark-purple" onClick={this.props.fav}>BookMark</button>

                    </div>
                    </div>

                   
                </div>
              
                </div>

               
               
               </div>
                
         
    
          
        );
    }
}