import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Pending from'./Pending';

export default class Crequest extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],del:false};
    }
     componentWillMount(){
        axios.get('/pendingevent')
        .then(res=>{
            this.setState({data:res.data})
        })
        
       
    }
    
    remove(id){
     
        axios.get(`/removeevent/${id}`)
        .then(res=>{
            this.setState({...this.state,del:true})
      })
   
      }
       
      componentDidUpdate() {
        axios.get('/pendingevent')
        .then(res=>{
            this.setState({data:res.data})
        })
      }
   
    render() {
        return (
            <div>
                
    <div class="homepage-next-events">
    <div class="container">
        <div class="row">
        {this.state.del===true &&<div className="col-md-12">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                <h6>Your Event  Have Been Removed <strong>Successfuly</strong> </h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}
            <div class="next-events-section-header">
           
                <h2 class="entry-title"><strong>Pending Request</strong></h2>
                
            </div>
        </div>
        <br></br><br></br>
        <div class="row">
        {this.state.data.length===0 &&<h2 style={{marginBottom:100}}><strong>NO Request</strong></h2>}
               
            {this.state.data.map((elem, i) => <Pending elem={elem} key={i} remove={this.remove.bind(this)} />)}
        </div>
        </div>
    </div>
</div>
           

            
          
        );
    }
}

