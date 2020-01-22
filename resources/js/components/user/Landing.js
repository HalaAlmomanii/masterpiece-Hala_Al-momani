import React, { Component,BrowserRouter,Route } from 'react';

import LandingItem from './LandingItem';


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],price:"",Date:"",category_id:"",time:"",cat:[]};
        

    }
    componentDidMount(){
        axios.get('/allevent')
        .then(res=>{
            console.log(res.data)
           this.setState({data:res.data})
        })

        axios.get('/allcategory').then(res=>{
            console.log(res.data)
           this.setState({cat:res.data})
        })
    }

    filter(e){
        this.setState({[e.target.name]:e.target.value})
       
    }
    search(){
        console.log("tg")
        let data={
            price:this.state.price,
            Date:this.state.Date,
         category_id:this.state.category_id,
         time:this.state.time
        }

     axios.post('/generalfilter',data)
     .then(res => {
        this.setState({data:res.data})
    console.log('from handle submit', res.data);
   
    });
      
    }
    
    render() {
        return (
            <div class="container">
                           <div class="row">
                <div class="col">
                    <br></br><strong>Date: </strong>
                    <input onChange={this.filter.bind(this)} name='Date' type="date"name="Date" placeholder="Date"/>
                </div>
    
                <div class="col">
                <br></br><strong>Time: </strong>
                    <input type="time" placeholder="time" name="time" onChange={this.filter.bind(this)}/>
                </div>
    
                <div class="col">
                <br></br><strong>Price: </strong>
                    <input type="number" min='0' name='price' onChange={this.filter.bind(this)} placeholder="price"/>
                </div>
    
                <div >
                <div class="hala" style={{'margin':-10}}>
                                <div class="select-locations">
                                <select name="category_id" value={this.state.category_id} onChange={this.filter.bind(this)} >
                                 < option hidden >Category</option>
                                  {this.state.cat.map((elem,index) => (
                                      <option key={index} value={elem.id}>{elem.type}</option>
                   
                                              ))}
                                         </select>
              
                 </div>
                 
                </div>
              
                </div >
               
                <button  onClick={this.search.bind(this)} style={{margin:25,backgroundColor:'white', border:'none', cursor: 'pointer'}}><i style={{color:"rgba(88,20,121,1) "}}class="fa fa-search  fa-lg"></i></button>
                
      
                
      
            </div>
            <div class="homepage-next-events">
            <div class="container">
                <div class="row">
                    <div class="next-events-section-header">
        <h2 class="entry-title"> Events</h2>
                        </div>
                        
                </div>
                {this.state.data.length===0 && <h1 class="entry-title"> <strong>No Events</strong> </h1>}
               
                 <br></br> <br></br>
                <div class="row">   
               
            
            {this.state.data.map((elem, i) => <LandingItem elem={elem} key={i} />)} 

            </div>
      </div>
        </div>
        </div>
            
       
       
           
            
           
           
        );
    }
}