import React, { Component } from 'react';
import Axios from 'axios';


export default class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        type:"",
        flash:false,
        add:false,
        del:false,
        data:[]
        };
    }
change(e){
    this.setState({flash:false})
    this.setState({[e.target.name]:e.target.value})

}

addform(){
    Axios.get(`/newcategory/${this.state.type}`)
    .then(res=>{
        this.setState({flash:true,type:""})
        
    })
}

addbtn(){
    this.setState({add:true,del:false});
}

removebtn(){
    Axios.get("/allcategory")
    .then(res=>{
        console.log(res.data)
        this.setState({data:res.data})
        this.setState({add:false,del:true})
    })
    
}
removeit(id){
    Axios.get(`delcategory/${id}`).then(res=>{
        this.setState({flash:true})  
    },
    this.removebtn()

    )

}




render() {
       
    if(this.state.add===true)
    {
    return (  
       <div>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
            {this.state.flash===true &&<div>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h6>Your New Category Have Been Added <strong>Successfuly</strong></h6>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            </div>}
                <div className="card" style={{borderColor:"rgba(88,20,121,1)"}}>
                    <div className="card-header" style={{backgroundColor:"rgba(88,20,121,1)"}}>
                      <h4  className="entry-title text-white"> <strong>New Category </strong></h4> 
                        </div>

                    <div className="card-body">
                        
                            <strong>Name of Category:</strong>
                            <input name='type' onChange={this.change.bind(this)} type="text" className="form-control" value={this.state.type} required={true}/>

                              <br></br>{this.state.type.length>0&& <button style={{display:'inline'}} class="btn gradient-bg" onClick={this.addform.bind(this)}>Add</button>}
                              <a href='http://127.0.0.1:8000/category'><button style={{marginLeft:20}} class="btn gradient-bg" >Back</button></a>
                             
                           
                      
                    </div>
                </div>
                <br></br><br></br>
            </div>
        </div>
    </div>   

              


</div>   
 
    );
            }
if(this.state.del===true){
    
    
return (
    <div class="homepage-next-events">
    <div class="container">
        <div class="row">
            <div class="next-events-section-header">
<h2 class="entry-title">{this.state.company} Remove Category</h2>
                </div>
        </div>
        {this.state.flash===true &&<div>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h6>Your New Category Have Been Added <strong>Successfuly</strong></h6>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            </div>}
         <br></br>
       <div class="row">  
         {this.state.data.map((elem, i) =>{
             return(

    <div key={i}class="col-3 col-sm-3 col-md-3">
    <div class="next-event-wrap">
        
    
        <header class="entry-header">
           
             <div class="posted-date"><span> {elem.type}</span></div>
         
        </header>
    
        <div class="entry-content">
     
        </div>
    
        <footer class="entry-footer">
      <div> <button  class="btn gradient-sm" onClick={this.removeit.bind(this,elem.id)}>Remove</button></div><br></br>
      
                            
     
         
        </footer>
    <br></br>
    </div>
    </div>
             )
    
         })}
   
    
    </div>
    
    </div>
    <div><a href='http://127.0.0.1:8000/category'><button  class="btn gradient-bg" >Back</button></a> </div>
      <br></br>
      </div>
       
    
     )}

else {
    return(
        <div style={{textAlign: 'center',marginBottom:150,marginTop:150}}>
    <button class="btn gradient-bg" style={{ width:350, height:110,marginRight:100,marginLeft:-100}} onClick={this.addbtn.bind(this)}>Add New Category</button>
    <button class="btn gradient-sm" style={{ width:300, height:110} }onClick={this.removebtn.bind(this)}>Remove Category</button>
    </div>
    )

}
}
}

    

  
     
  