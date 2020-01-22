import React, { Component } from 'react'
export default class AC extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data:[],flash:false
        
        };
    }
 componentDidMount(){

    axios.get(`/ACevent/${this.props.match.params.id}`)
    .then(res=>{
        
       this.setState({data:res.data,company:res.data[0].company.name})

      
  

 })
}


remove(id){
axios.get(`/removeevent/${id}`)
.then(res=>{
    this.setState({flash:id})
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
        {this.state.data.length===0 && <h1 class="entry-title"> <strong>No Approved Event</strong> </h1>}
{this.state.data.length>0&&this.state.data.map((elem,i)=>{
return (
   
    <div class="col-4 col-sm-4 col-md-4">
         
    <div class="next-event-wrap">
    
        <header class="entry-header">
            <h3 style={{color:this.state.flash===elem.id?"red":""}} class="entry-title">{elem.title}</h3>
         <div class="posted-date"><span>{elem.Date}</span></div>
         <div class="posted-date"><span>{elem.time}</span></div>
        </header>

        <div class="entry-content">
      <div class="posted-date">Category<span> {elem.category.type}</span></div>
        </div>

        <footer class="entry-footer">
        <button class="btn gradient-sm"  onClick={this.remove.bind(this,elem.id)}>Remove</button>
      
         
        </footer>
        <br></br>
</div>
</div>

)


    })}
      </div>
  </div>
    </div>
    );
}
}
