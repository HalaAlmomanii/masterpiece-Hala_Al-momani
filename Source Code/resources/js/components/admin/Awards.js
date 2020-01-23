import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
export default class Awards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
            point:'',
            photo:'',
            flash:false,
            del:false,
            add:false,
            data:[],
            error:[]
            
        
        };
    }
     sendaward(){
        
        var formData = new FormData();
        formData.append('photo',this.state.photo);
        formData.append('title',this.state.title);
        formData.append('point',this.state.point);
        formData.append('description',this.state.description);
      
         axios.post('/award',formData,
         {
             headers: {
                 'Content-Type': 'multipart/form-data',
             },
 
         })
         .then(res=> {
             
             if(res.data.length>0){
                this.setState({error:res.data[0]});
                
             }
             else{
                this.setState({flash:true,title: '',
                description:'',
                point:'',
                photo:''
            })   
             }
       
       
        });
    
       
       
     }

     addbtn(){
        this.setState({add:true,del:false});
    }
    
    removebtn(){
        Axios.get("/award")
        .then(res=>{
            
            this.setState({data:res.data})
            this.setState({add:false,del:true})
        })
        
    }
    removeit(id){
        Axios.get(`/delawards/${id}`).then(res=>{
            this.setState({flash:true})  
        },
        this.removebtn()
    
        )
    
    }
   
    awardinfo(e){
        this.setState({flash:false}) 
        if(e.target.name==='photo')
        {
            this.setState({[e.target.name]:e.target.files[0]}) 
            this.setState({error:{...this.state.error,
                [e.target.name]:""}
               })
        }
        else
       this.setState({[e.target.name]:e.target.value})
       this.setState({error:{...this.state.error,
        [e.target.name]:""}
       }
     )
     }
     render() {
        if(this.state.add===true){
    
        return (  
           <div>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                {this.state.flash===true &&<div>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                <h6>Your New Award Have Been Added <strong>Successfuly</strong></h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}
                    <div className="card" style={{borderColor:"rgba(88,20,121,1)"}}>
                        <div className="card-header" style={{backgroundColor:"rgba(88,20,121,1)"}}>
                          <h4  className="entry-title text-white"> <strong>New Awards</strong></h4> 
                            </div>
   
                        <div className="card-body">
                            
                                <strong>Name of Award:</strong>
                                <input  type="text" name="title" className="form-control" value={this.state.title} onChange={this.awardinfo.bind(this)} required={true}/>
                                <p style={{color:'red'}}>{this.state.error.title}</p>
                               <br></br> <strong>Description:</strong>
                                <textarea className="form-control" name="description" required={true} value={this.state.description} onChange={this.awardinfo.bind(this)}></textarea>
                                <p style={{color:'red'}}>{this.state.error.description}</p>
                                <br></br><strong>Point:</strong>
                                 <input type="number" min="0" name="point" className="form-control" required={true} value={this.state.point} onChange={this.awardinfo.bind(this)} />
                                 <p style={{color:'red'}}>{this.state.error.point}</p>
                                
                                <br></br> <strong>Photo:</strong>
                                <input type="file" name="photo"  key={this.state.photo || '' }  className="form-control" onChange={this.awardinfo.bind(this)} required={true}/>
                                <p style={{color:'red'}}>{this.state.error.photo}</p>
                                  <br></br> 
                                   <button style={{display:'inline'}}  class="btn gradient-bg" onClick={this.sendaward.bind(this)}>Publish</button> 
                                  <a href='http://127.0.0.1:8000/awards'><button style={{marginLeft:25}}  class="btn gradient-bg" >Back</button></a>
                          
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
                    <h2 class="entry-title">{this.state.company} Remove Awards</h2>
                                    </div>
                            </div>
                            {this.state.flash===true &&<div>
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <h6>Your New Award Have Been Added <strong>Successfuly</strong></h6>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                </div>}
                             <br></br>
                           <div class="row">  
                             {this.state.data.map((elem, i) =>{
                                 return(
                    
                        <div key={i}class="col-3 col-sm-6 col-md-6">
                        <div class="next-event-wrap">
                            
                                 <h3 class="entry-title">{elem.title}</h3>
                            <header class="entry-header">
                               
                                 <div class="posted-date">Point  <span>{elem.point}</span></div>
                             
                            </header>
                        
                            <div class="entry-content">
                         {elem.description}
                            </div>
                        
                            <footer class="entry-footer">
                          <div><button  class="btn gradient-sm" onClick={this.removeit.bind(this,elem.id)}>Remove</button></div>
                       
                                                
                         
                             
                            </footer>
                        <br></br>
                        </div>
                        </div>
                                 )
                        
                             })}
                      
                        
                        </div>
                        
                        </div>
                        <div>
                            <a href='http://127.0.0.1:8000/awards'><button  class="btn gradient-bg" >Back</button></a> </div>
                            <br></br>
                          </div>
                         
                           
                        
                         )}
                    
                    else {
                        return(
                            <div style={{textAlign: 'center',marginTop:150,marginBottom:150}}>
                        <button class="btn gradient-bg" style={{ width:350, height: 110,marginRight:100,marginLeft:-100}} onClick={this.addbtn.bind(this)}>Add New Awards</button>
                        <button class="btn gradient-sm" style={{ width:300, height:110} }onClick={this.removebtn.bind(this)}>Remove Awards</button>
                        </div>
                        )
                    
                    }    
    }
}
   
      
       
    
