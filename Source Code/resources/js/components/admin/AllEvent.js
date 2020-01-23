import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Axios from 'axios';


export default class AllEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data:[]
        
        };
    }
 componentDidMount(){
     axios.get("/Admin/allEvent").then(
         res=>{
             console.log(res.data)
             this.setState({data:res.data})
         }
     )
 }
    render() {
        
        return (

<div class="homepage-next-events">
    <div class="container">
        <div class="row">
            <div class="next-events-section-header">
                <h2 class="entry-title">Our Companies</h2>
                </div>
        </div>
         <br></br>
        <div class="row">    
{this.state.data.map((elem,i)=>{
return (
    
    <div class="col-3 col-sm-3 col-md-3">
        <div class="next-event-wrap">
            

            <header class="entry-header">
                <h3 class="entry-title">{elem.name}</h3>

             <div class="posted-date"><span>{elem.email}</span></div>
            </header>

            <div class="entry-content">
               <div class="posted-date">Publishing Event<span>  {elem.event.length}</span></div>
            </div>

            <footer class="entry-footer">
            <a class="btn gradient-bg"style={{color:'white'}}  href={"/Aevent/"+elem.id}>Events</a>
             
            </footer>
  
    </div>
    </div>
  
)


        })}
        
          </div>
      </div>
      <br></br><br></br>
        </div>
        );
    }
}
