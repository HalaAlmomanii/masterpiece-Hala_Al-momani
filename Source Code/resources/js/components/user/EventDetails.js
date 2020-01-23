import React, { Component} from 'react';



export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],fav:"",total:0,price:0,category:"",name:"",number:"",flash:false};
        

    }
    
    change(e){
        this.setState({[e.target.name]:e.target.value})
    }
    fav(id){
        if(this.state.fav===true)
        {
            axios.get(`/userfav/${id}`) 
            .then(res=>{
                console.log(res.data)
               this.setState({fav:false})
            })
        }
   
    
        else
        {
            if(this.state.fav===false)
            {
                axios.get(`/deluserfav/${id}`) 
                .then(res=>{
                    console.log(res.data)
                   this.setState({fav:true})
                })
            }
            
        }
        }


        
    
    componentDidMount(){
        let value=""
       axios.get(`/eventdetail/${this.props.match.params.id}`)
        .then(res=>{
            console.log("ok",res.data)
            
            if(res.data[1].length>0){
               value=false
               this.setState({data:res.data[0],fav:value})
            }
            else{
                value=true
                this.setState({data:res.data[0],fav:value})
            }
            
            
        })
        
       
         
           
        
    
        
    }
  
    

    inc(){
        this.setState({total:this.state.total+1,price:(this.state.total+1)*this.state.data.price})
       
    }
    dec(){
        if(this.state.total>=1)
        {
        this.setState({total:this.state.total-1,price:(this.state.total-1)*this.state.data.price})
        }
    }


  reset(){
        this.setState({total:0,price:0,flash:false,name:"",number:"",total:0,price:0})
        
    }

book(){
    axios.get(`/newbook/${this.props.match.params.id}/${this.state.total}`)
    .then(res=>{
        console.log(res.data)
       this.setState({flash:true,name:"",number:"",price:0,total:0})
})
this.componentDidMount()

}
    render() {
      
        return (
          
            <div> 
<div class="container" >
    <div class="row">
        <div class="col-12 single-event">
            <div class="event-content-wrap">
                <header class="entry-header flex flex-wrap justify-content-between align-items-end">
                    <div class="single-event-heading">
                        <h2 class="entry-title"><strong>{this.state.data.title}</strong></h2>
                    </div>

                    <div class="buy-tickets flex justify-content-center align-items-center">
                    <button class="btn" style={{backgroundColor:'white',color:this.state.fav==false?'red':'black',marginRight:35}}
                     onClick={this.fav.bind(this,this.props.match.params.id)}>
                     {this.state.fav?"BookMark":"Remove"} {this.state.fav==false? <i class="fa fa-heart" ></i>:<i class="fa fa-heart-o" ></i>}</button> 
                    {this.state.data.price>0&& 
            <button class="btn gradient-bg" data-toggle="modal" data-target="#exampleModalScrollable">
                    Buy Tickets  </button>}
                       
                    </div> 
                </header>

                <figure class="events-thumbnail" style={{marginTop:50,marginBottom:50}}>
                <img src={"/storage/"+this.state.data.photo}/>
              
                    
                </figure>
            </div>
        </div>
    </div>
</div>


<div class="row flex justify-content-center align-items-center " style={{marginBottom:90}}>
        <div class="col-8 single-event">
            <div class="tabs">
                <ul class="tabs-nav flex">
                    <li class="tab-nav flex justify-content-center align-items-center" data-target="#tab_details">Details</li>
                    <li class="tab-nav flex justify-content-center align-items-center" data-target="#tab_venue">Description</li>
                    <li class="tab-nav flex justify-content-center align-items-center" data-target="#tab_organizers">Organizers</li>
                </ul>

                <div class="tabs-container" >
                    <div id="tab_details" class="tab-content">
                        <div class="flex flex-wrap justify-content-between">
                            <div class="single-event-details">
                                <div class="single-event-details-row">
                                    <label>Date:</label>
                                    <p>{this.state.data.Date}</p>
                                </div>

                                <div class="single-event-details-row">
                                    <label>Time:</label>
                                    <p>{this.state.data.time}</p>
                                </div>

                                <div class="single-event-details-row">
                                    <label>Price:</label>
                                    <p>{this.state.data.price} <span>JD</span></p>
                                </div>

                              

                                <div class="single-event-details-row">
                                    <label>Remining Tickets:</label>
                                    <p>{parseInt(this.state.data.numberofticket)-parseInt(this.state.data.numberofbooking)}</p>
                                </div>
                            </div>

                            <div class="single-event-map">
                                <iframe id="gmap_canvas" src={this.state.data.location} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>

                    <div id="tab_venue" class="tab-content">
                        <p>{this.state.data.description}</p>
                    </div>

                    <div id="tab_organizers" class="tab-content">
                      <div class="flex justify-content-between">
                      <img src="/images/sa.png"/>
                      <img src="/images/himalayas.png"/>
                      <img src="/images/the-pirate.png"/>
                     
                      </div>
                    
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
       
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div  style={{backgroundColor:'rgba(88,20,121,1)'}} class="modal-header">
        <h3 class="single-event-heading event-content-wrap" style={{color:'white'}} id="exampleModalScrollableTitle">Check Out</h3>
      </div>
      <div class="modal-body  single-event-details-row">
       {this.state.flash===true &&  <p style={{color:'green'}}><strong>Your Reservation was successed</strong></p>}
      <h6><strong>Price Per One:</strong></h6>
      <h4><span>{this.state.data.price} </span>JD</h4>
      <div>
      <div class="modal-footer">
          </div>
                        <div class="number-of-ticket flex justify-content-between align-items-center">
                        <button  onClick={this.inc.bind(this)}>+</button>
         <input type="text" class="form-control"  value={this.state.total} name='total'id="recipient-name"></input>
         <button  type="button" min="1" onClick={this.dec.bind(this)}>-</button>
                        </div><br></br>
                        <strong>TotalPrice:</strong>
                        <span> {this.state.price}</span>
                        <div class="modal-footer"></div>
                        <div>
                        <strong>CardName:</strong>
                                 <input name="name" value={this.state.name} onChange={this.change.bind(this)} type="text"class="form-control" id="recipient-name"  />
                        </div>
                       
                        <br></br>
                        <div>
                        <strong>CardNumber:</strong>
                                 <input type="text" value={this.state.number} name="number"onChange={this.change.bind(this)}  class="form-control" id="recipient-name"  />
                        </div>
                        <div class="modal-footer"></div>

        
                        <div class="modal-footer flex justify-content-between">
                        <img src="/images/SRC-Network-Logo_FINAL.jpg"></img>
                        </div>
                    
</div>


     
      </div>
     
      <div class="modal-footer">
        <button type="button" onClick={this.reset.bind(this)} class="btn" data-dismiss="modal">Close</button>
        <button disabled={this.state.number.length>10 && this.state.total>=1?false:true} type="button" onClick={this.book.bind(this)} class="btn gradient">Confirm</button>
      </div>
    </div>
  </div>
</div>

            </div>
          
        );
    }
}