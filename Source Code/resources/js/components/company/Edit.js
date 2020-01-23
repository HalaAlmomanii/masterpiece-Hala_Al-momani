import React, { Component } from 'react';


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {data:{},category:[],flash:false

    
  };
}
company(e){
  this.setState({flash:false})
if(e.target.name=='photo')
  this.setState({
    data: {
      ...this.state.data,
     [e.target.name]:  e.target.files[0] 
    
    }
  })

else
this.setState({
  data: {
    ...this.state.data,
   [e.target.name]:  e.target.value
  
  }
})


  
      }   
  componentDidMount (){

    axios.get("/editevent/"+this.props.match.params.id)
    .then(res=>{
      
        this.setState({data:res.data[0]})
        
    })
    .then(() =>{

      axios.get("/allcategory")
      .then(res=>{
          this.setState({category:res.data})
          
      })
    })
     
  
    
  
    
  }
  
 
  sendevent(){
   
    var formData = new FormData();
    formData.append('id',this.props.match.params.id)
    formData.append('photo',this.state.data.photo)
    formData.append('title',this.state.data.title);
    formData.append('price',this.state.data.price);
    formData.append('time',this.state.data.time);
    formData.append('date',this.state.data.Date);
    formData.append('description',this.state.data.description);
    formData.append('location',this.state.data.location);
    formData.append('numberofticket',this.state.data.numberofticket);
    formData.append('category_id',this.state.data.category_id);
     axios.post('/updateevent',formData,
     {
         headers: {
             'Content-Type': 'multipart/form-data',
         },

     })
     .then(res => {
      this.setState({flash:true})
   
    });
  }
  render() {
        return (
          <div>
          <div className="container">
          <div className="row justify-content-center">
          
              <div className="col-md-8">
              {this.state.flash===true &&<div>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                <h6>Your Update Have Been Saved <strong>Successfuly</strong></h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}
                  <div className="card" style={{borderColor:"rgba(88,20,121,1)"}}>
                      <div className="card-header" style={{backgroundColor:"rgba(88,20,121,1)"}}>
                        <h4  className="entry-title text-white"> New event</h4> 
                          </div>
 
                      <div className="card-body">
                          
                              <strong>Name of Event:</strong>
                              <input  type="text" name="title" className="form-control" defaultValue={this.state.data.title} onChange={this.company.bind(this)} required={true}/>
                               
                             <br></br> <strong>Description:</strong>
                              <textarea className="form-control" name="description"  defaultValue={this.state.data.description} onChange={this.company.bind(this)}></textarea>
                             
                              <br></br><strong>Price:</strong>
                               <input type="number" min="0" name="price" className="form-control"  defaultValue={this.state.data.price} onChange={this.company.bind(this)} />
                             
                              <br></br><strong>Number Of Ticket:</strong>
                              <input type="number" min="0" name="numberofticket" className="form-control" defaultValue={this.state.data.numberofticket} onChange={this.company.bind(this)} />
                             
                              <br></br><strong>Location:</strong>
                              <input type="text" name="location" className="form-control" value={this.state.data.location} onChange={this.company.bind(this)} required={true}/>
             
                              <br></br><strong>Date:</strong>
                              <input type="date" name="date" className="form-control" defaultValue={this.state.data.Date} onChange={this.company.bind(this)} required={true}/>
                              
                              <br></br><strong>Time:</strong>
                              <input type="time" name="time" className="form-control" defaultValue={this.state.data.time} onChange={this.company.bind(this)} required={true}/>
                              
                              <br></br> <strong>Photo:</strong>
                              <input type="file" name="photo" className="form-control"  onChange={this.company.bind(this)} />
                              
                              <br></br> <strong>Category:</strong><br></br>
                                <div class="hala">
                              <div class="select-locations">
                              <select name="category_id" value={this.state.data.category_id} onChange={this.company.bind(this)} >
                                 < option hidden >Choose</option>
                                  {this.state.category.map((elem,index) => (
                                      <option key={index} value={elem.id}>{elem.type}</option>
                   
                                              ))}
                                         </select>
                                       </div>
                                       </div>
                                      
                              
                              <br></br> <button  class="btn gradient-bg" onClick={this.sendevent.bind(this)}>Save</button>
                             
                         
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

