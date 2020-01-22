import React, { Component } from 'react';
import UserCategory from'./UserCategory';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:[],
      jozaa2:{},
      data:[],
      newData:{},
      flash:false
    
    
    
    
    };
      
    
 
}

componentDidMount(){
   axios.get('/favcategory')
   .then(res=>{
    console.log(res)
     this.setState({data:res.data[0][0]})
     this.setState({category:res.data[1]})
   })
   .then(x=>{
    
    this.state.data.category.map(elem=>{
    this.setState({jozaa2:{...this.state.jozaa2,[elem.id]:true}})
    })
   })
}

edit(e){      
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
  
  


  
  


save(){
  let result=[]
  let obj={...this.state.jozaa2,...this.state.newData}
  for (let key in obj){
  if(obj[key]===true)
  {result.push(parseInt(key))}
}

var formData = new FormData();
formData.append('photo',this.state.data.photo);
formData.append('name',this.state.data.name);
 axios.post('/editprofile',formData,
 {
     headers: {
         'Content-Type': 'multipart/form-data',
     },
    

 })
 .then(response => {
console.log('from handle',typeof(response.data));

});
axios.post('/test',result)
.then(response => {
  this.setState({flash:true})
  
  });
  this.props.refresh()
}

  
  changeInfo(e){
    let name=e.target.name
    let value=e.target.checked

    this.setState({newData:{...this.state.newData,[name]:value}})

    
  }
    
  
 

  render() {


    const{category,data,newData}=this.state
        return (
<div className="card-body">
{this.state.flash===true &&<div>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                <h6>Your Update Have Been Saved <strong>Successfuly</strong></h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}                       
                           
<strong>Name</strong>
   <input  className="form-control"  type="text" name="name" defaultValue={this.props.elem.name}   onChange={this.edit.bind(this)}/>
   <br></br> <strong>Photo</strong>
     <input  className="form-control" type="file" name="photo"  onChange={this.edit.bind(this)}/> 
    <br></br> <strong>Category</strong><br></br>
   {category.map((elem, i) => <UserCategory changeCat={this.changeInfo.bind(this)} elem={elem} user={data.category}   key={i} />)}
       <br></br>                  
   <button  class="btn gradient-bg" onClick={this.save.bind(this)}>Save</button>
                  
       </div>
       
        );


    }
  }
