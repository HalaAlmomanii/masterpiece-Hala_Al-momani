import React, { Component } from 'react';


export default class ArequestItem extends Component {
    constructor(props) {
        super(props);
        this.state = {del:false,add:false};

   
    }
    reject(id){
     
        axios.get(`/reject/${id}`)
        .then(res=>
            {
                this.setState({del:id})
                
            })
      }

      accept(id){
     
        axios.get(`/accept/${id}`)
        .then(res=>
            {
                this.setState({add:id})
                
            })
            
      }
   
    render() {
        
        return (

            <div class="col-4 col-sm-6 col-md-6">
            <div class="next-event-wrap">
                
    
                <header class="entry-header">
                    <h3 style={{color:this.state.add===this.props.elem.id?"green":this.state.del===this.props.elem.id?"red":""}}class="entry-title">{this.props.elem.title}</h3>
                    <img src={"/storage/"+this.props.elem.photo}></img>
                 <div class="posted-date"><span>{this.props.elem.time}</span></div>
                 <div class="posted-date"><span> {this.props.elem.Date}</span></div>
                 
                </header>
    
                <div class="entry-content">
                {this.props.elem.description}
                   <div class="posted-date">Company<span>  {this.props.elem.company.name} </span></div>
                   <div class="posted-date">Category<span>  {this.props.elem.category.type} </span></div>
                </div>
    
                <footer class="entry-footer">
                <button style={{marginRight:10}} class="btn gradient-bg" onClick={this.accept.bind(this,this.props.elem.id)}>Accept</button>
                
                <button class="btn gradient-sm" onClick={this.reject.bind(this,this.props.elem.id)}>Reject</button>
                
                 
                </footer>
      <br></br>
        </div>
        </div>
          
  
          
       
           
           
     
       
        );
        
       
    }
}