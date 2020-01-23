import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
            price:'',
            numberofticket:'',
            location:'',
            date:'',
            category_id:'',
            time:'',
            photo:'',
            data:[],
            error:[]
        
        };
    }
    componentDidMount(){
        axios.get("/allcategory")
    .then(res=>{
        this.setState({data:res.data})
        
    })
}
     sendevent(){
        
        var formData = new FormData();
        formData.append('photo',this.state.photo);
        formData.append('title',this.state.title);
        formData.append('price',this.state.price);
        formData.append('time',this.state.time);
        formData.append('date',this.state.date);
        formData.append('description',this.state.description);
        formData.append('location',this.state.location);
        formData.append('numberofticket',this.state.numberofticket);
        formData.append('category_id',this.state.category_id);
         axios.post('/createevent',formData,
         {
             headers: {
                 'Content-Type': 'multipart/form-data',
             },
 
         })
         .then(res  => {
            console.log(res.data[0])
            if(res.data.length===0)
            {
                 window.location.href='/pending';
            }
          else{
              this.setState({error:res.data[0]});
              
          }
        
       
        });
        
       
     }
    company(e){
        
        if(e.target.name==='photo')
        {
            this.setState({[e.target.name]:e.target.files[0]}) 
            
        }
        else
       this.setState({[e.target.name]:e.target.value})
     }
    render() {
       
    
        return (  
           <div>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{borderColor:"rgba(88,20,121,1)"}}>
                        <div className="card-header" style={{backgroundColor:"rgba(88,20,121,1)"}}>
                          <h4  className="entry-title text-white"> New event</h4> 
                            </div>
   
                        <div className="card-body">
                            
                                <strong>Name of Event:</strong>
                                <input  type="text" name="title" className="form-control" value={this.state.title} onChange={this.company.bind(this)} required="true"/>
                                 <p style={{color:'red'}}>{this.state.error.title}</p>
                               <br></br> <strong>Description:</strong>
                                <textarea className="form-control" name="description" required="true" value={this.state.description} onChange={this.company.bind(this)}></textarea>
                                <p style={{color:'red'}}>{this.state.error.description}</p>
                                <br></br><strong>Price:</strong>
                                 <input type="number" min="0" name="price" className="form-control" required="true" value={this.state.price} onChange={this.company.bind(this)} />
                                 <p style={{color:'red'}}>{this.state.error.price}</p>
                                <br></br><strong>Number Of Ticket:</strong>
                                <input type="number" min="0" name="numberofticket" className="form-control" required="true" value={this.state.numberofticket} onChange={this.company.bind(this)} />
                                <p style={{color:'red'}}>{this.state.error.numberofticket}</p>
                                <br></br><strong>Location:</strong>
                                <input type="text" name="location" className="form-control" value={this.state.location} onChange={this.company.bind(this)} required="true"/>
                                <p style={{color:'red'}}>{this.state.error.location}</p>
                                <br></br><strong>Date:</strong>
                                <input type="date" name="date" className="form-control" value={this.state.date} onChange={this.company.bind(this)} required="true"/>
                                <p style={{color:'red'}}>{this.state.error.date}</p>
                                <br></br><strong>Time:</strong>
                                <input type="time" name="time" className="form-control" value={this.state.time} onChange={this.company.bind(this)} required="true"/>
                                <p style={{color:'red'}}>{this.state.error.time}</p>


                                <br></br> <strong>Photo:</strong>
                                <input type="file" name="photo"  style={{display:"none"}} id="file-input"className="form-control"  onChange={this.company.bind(this)} required/>
                                <div class="image-upload">
                                 <label for="file-input">
                                <img style={{cursor: 'pointer'}} src="/images/folder-icon.png"/>
                                 </label>
                                </div>
                                <p style={{color:'red'}}>{this.state.error.photo}</p>
                                <br></br> <strong>Category:</strong><br></br>
                                  <div class="hala">
                                <div class="select-locations">
                                <select name="category_id" value={this.state.category_id} onChange={this.company.bind(this)} >
                                 < option hidden >Choose</option>
                                  {this.state.data.map((elem,index) => (
                                      <option key={index} value={elem.id}>{elem.type}</option>
                   
                                              ))}
                                         </select>
                                         <p style={{color:'red'}}>{this.state.error.category_id}</p>
                                         </div>
                                         </div>
                                        
                                
                                <br></br> <button   class="btn gradient-bg" onClick={this.sendevent.bind(this)}>Submit</button>
                               
                          
                        </div>
                    </div>
                    <br></br><br></br>
                </div>
            </div>
        </div>   
    
                  
 
    
    </div>   
     
        );
    }
}

