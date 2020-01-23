import React, { Component} from 'react';


export default class ApprovedItem extends Component {
  
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
                    <br></br>
                    <h4 class="posted-date"><strong>Number_of_Tickets:</strong><span>   {this.props.elem.numberofticket}</span></h4>
                    <h4 class="posted-date"><strong>Number_of_Booking:</strong><span>   {this.props.elem.numberofbooking}</span></h4>
                    <h4 class="posted-date"><strong>Remaning:</strong><span>   {this.props.elem.numberofticket - this.props.elem.numberofbooking}</span></h4>
                </div>

            
                <br></br>
            </div>
       </div>
        </div>
           
        
          
        );
    }
}
