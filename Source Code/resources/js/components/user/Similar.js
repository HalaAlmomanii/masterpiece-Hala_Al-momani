import React, { Component,BrowserRouter,Route } from 'react';
import SimilarEvent from './SimilarEvent';
export default class Similar extends Component {  
    
    constructor(props) {
        super(props);
        this.state = {data:[],price:"",Date:"",category_id:"",time:"",filter:false};
        

    }

    componentDidMount(){
        axios.get("/getsimilar")
        .then(res=>{
            console.log(res)
           this.setState({data:res.data})
           

        })
        
    
    }
   
    filter(e){
        this.setState({[e.target.name]:e.target.value})
       
    }
    search(){
        let data={
            price:this.state.price,
            Date:this.state.Date,
         category_id:this.state.category_id,
         time:this.state.time
        }

     axios.post('/filter',data)
     .then(res => {
        this.setState({data:[{event:res.data}],filter:true
        })
    console.log('from handle submit', this.state.data[0].event);
   
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

                 <select disabled={this.state.data.length===0?true:false} name="category_id" value={this.state.category_id} onChange={this.filter.bind(this)} >
                  < option hidden  >Category</option>
                   {this.state.data.map((elem,index) => (
                 
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
<h2 class="entry-title"> Your Favourite</h2>
         </div>
         
 </div>
 {this.state.data.length===0 && <h1 class="entry-title"> <strong>Please Visit Your <a href="/profile">profile</a> to set Your Category</strong> </h1>}

  <br></br> <br></br>
   

{this.state.filter===true&&this.state.data[0]['event'].length===0 && <h1 class="entry-title"> <strong>No Matching</strong> </h1>}
{this.state.data.length>0&&this.state.data.map((elem, i) => <SimilarEvent  elem={elem.event} key={i} />)} 

</div>
</div>
</div>



            
          
           

           
              
     
      
          
        );
    }
}