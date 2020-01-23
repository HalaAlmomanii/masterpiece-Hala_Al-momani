import React, { Component,BrowserRouter,Route } from 'react';
;


export default class UserAward extends Component {
   
    
    render() {
        return (

            <div class="col-3 col-sm-6 col-md-6">
            <div class="next-event-wrap">
                
    
                <header class="entry-header">
                    <img src={"/storage/"+this.props.elem.photo}></img>
                    <h3> <strong>{this.props.elem.title}</strong></h3>
                 <div class="posted-date"><strong>Points</strong> <span>{this.props.elem.point}</span></div>
               
                 
                </header>
    
                <div class="entry-content">
                <h5>{this.props.elem.description}</h5>
                <button onClick={this.props.calimit.bind(this,this.props.elem.point)} class="btn" style={{backgroundColor:'white',marginRight:35}}>
                Calim <i style={{fontSize:37}}style={this.props.elem.point>this.props.userpoint?{color:'red'}:{color:'green'}} class="fa fa-gift"></i></button> 
               
                </div>
    
                
      <br></br>
        </div>
        </div>
          
      
         
       
           
          

           
           
            
           
          
          
        );
    }
}
