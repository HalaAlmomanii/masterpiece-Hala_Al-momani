import React, { Component } from 'react';
import axios from 'axios';
import ApprovedItem from './ApprovedItem';


export default class Approved extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
    }
   
    componentDidMount (){

        axios.get('/approvedevent')
        .then(res=>{
            console.log(res.data)
            this.setState({data:res.data})
        })
       
    }
    render() {
        return (

            <div>
                
            <div class="homepage-next-events">
            <div class="container">
                <div class="row">
                    <div class="next-events-section-header">
                     <h2 class="entry-title"><strong>Approved Request</strong></h2>
                        
                    </div>
                </div>
                <div class="row">
                {this.state.data.length===0 &&<h2><strong>NO Approved Event </strong></h2>}
                        <br></br><br></br>
                        {this.state.data.map((elem, i) => <ApprovedItem elem={elem} key={i} />)}
                  
                </div>
                </div>
            </div>
        </div>
         
       

            
        );
    }
}

