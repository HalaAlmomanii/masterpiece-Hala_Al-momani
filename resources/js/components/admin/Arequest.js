import React, { Component } from 'react';
import Axios from 'axios';
import ArequestItem from './ArequestItem'

export default class Arequest extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
    }

    componentDidMount(){
        Axios.get('/allrequest')
        .then(res=>{
            console.log(res)
            this.setState({data:res.data})
        })
    }
    
    render() {
        return (
            <div class="homepage-next-events">
            <div class="container">
                <div class="row">
                    <div class="next-events-section-header">
        <h2 class="entry-title">{this.state.company} Company</h2>
                        </div>
                </div>
        
                 <br></br>
                <div class="row">   
                {this.state.data.length===0 && <h1 class="entry-title"> <strong>No Request</strong> </h1>}
            

         {this.state.data.map((elem, i) => <ArequestItem elem={elem} key={i} />)}
           

         </div>
      </div>
        </div>
        
        );
    }
}