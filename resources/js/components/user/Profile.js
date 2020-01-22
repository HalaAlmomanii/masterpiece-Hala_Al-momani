import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from'./UserInfo'
import UserAward from'./UserAward'
import EditProfile from'./EditProfile'
import Reservation from "./Reservation";
import FavUserEvent from'./FavUserEvent';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],swipe:[],info:false,book:{},fav:{},delfav:false,calim:""};
        this.calimit = this.calimit.bind(this);

    }
   componentDidMount(){
       axios.get('/userinfo')
       .then(res=>{
           console.log(res)
          this.setState({data:[res.data[0]]})
       })
   }
   award(){
       axios.get('/award')
       .then(res=>{
           console.log(res)
           this.setState({swipe:res.data,info:false,book:{},fav:{},delfav:false,calim:""})
          
       })
      
   }
   profile(){
      this.setState({info:true,swipe:[],book:{},fav:{},delfav:false,calim:""})

   }
   calimit(eventpoint){
   axios.get(`/calim/${eventpoint}`)
   .then(res=>{
       console.log(res)
       this.setState({calim:res.data})
   })
   this.refresh()
}
   reservation(){
    axios.get("/reservation")
    .then(res=>{
        this.setState({book:res.data,swipe:[],info:false,fav:{},delfav:false,calim:""})
        console.log(res)
    })
  
}
fav(){
    axios.get("/allfav")
    .then(res=>{
        this.setState({fav:res.data,swipe:[],info:false,book:{},calim:""})
        console.log(res)
    })
  
    
}

remove($id)
{ console.log($id)
    axios.get(`/deluserfav/${$id}`) 
    .then(res=>{
        console.log(res)
       this.setState({delfav:true,swipe:[],info:false,book:{},fav:{},calim:""})
    })
    this.fav()
}
refresh(){
    this.componentDidMount()
}
    render() {
        return (
            <div>
    
                {this.state.data.map((elem, i) => <UserInfo elem={elem} key={i} fav={this.fav.bind(this)}profile={this.profile.bind(this)} award={this.award.bind(this)} reservation={this.reservation.bind(this)} />)}
                {/* <button onClick={this.reservation.bind(this)}>Reservation</button>
                <button onClick={this.award.bind(this)}>Awards</button>
                <button onClick={this.profile.bind(this)}>Edit profile</button>
                <button onClick={this.fav.bind(this)}>fav</button> */}
                <br></br>
                {this.state.fav.length===0 &&<h1 class=" next-events-section-header" ><strong class="entry-title">No BookMarks</strong></h1>}
                {this.state.book.length===0 &&<h1 class=" next-events-section-header"><strong  class="entry-title ">No Reservation</strong></h1>}
                {this.state.swipe.length>0&&
                     <div class="homepage-next-events">
                     <div class="container">
                         <div class="row">
                             <div class="next-events-section-header">
                              <h2 class="entry-title"><strong>Awards</strong></h2>
                                 
                             </div>
                         </div>
                         {this.state.calim===false &&<div class="col-12">
                <div class="alert alert-danger alert-dismissible fade show col-12" role="alert">
                <h6>Your Ponits Don't Match <strong> Gift Points</strong></h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}  
                  {this.state.calim===true&&<div class="col-12">
                <div class="alert alert-success alert-dismissible fade show col-12" role="alert">
                <h6>Your Gift Arrived <strong> Enjoy!</strong></h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}

                         <div class="row">
                    
                   { this.state.swipe.map((elem, i) => <UserAward elem={elem} userpoint={this.state.data[0].point} key={i} flash={this.state.calim}  calimit={this.calimit} />)}
                    </div>
                </div>
            </div>
                }
                {this.state.info==true&&
                <div class="homepage-next-events">
                <div class="container">
                    <div class="row">
                        <div class="next-events-section-header">
                         <h2 class="entry-title"><strong>Edit Profile</strong></h2>
                            
                        </div>
                    </div>
                    
                    <div class="row">
                        
                   { this.state.data.map((elem, i) => <EditProfile elem={elem}  refresh={this.refresh.bind(this)} key={i} />)}
                   </div>
                   <br></br><br></br>
               </div>
       </div>
       

}
 
                {this.state.book.length>0 && 
                  <div class="homepage-next-events">
                  <div class="container">
                      <div class="row">
                          <div class="next-events-section-header">
                           <h2 class="entry-title"><strong>Reservation</strong></h2>
                              
                          </div>
                      </div>
                      
                      <div class="row">
                     <div class="homepage-next-events">
                     <div class="container">
                        
                         <div class="row">
                         {this.state.book.length===0 && <h1 class="entry-title"> <strong>No Reservation</strong> </h1>}
                    {this.state.book.map((elem, i) => <Reservation elem={elem.event} key={i}  />)}

                    </div>
                </div>
            </div>
</div></div></div>
                }


                {this.state.fav.length>0&&
                     <div class="homepage-next-events">
                     <div class="container">
                         <div class="row">
                             <div class="next-events-section-header">
                              <h2 class="entry-title"><strong>BookMark</strong></h2>
                                 
                             </div>
                            
                         </div>
                         {this.state.delfav===true &&<div class="col-12">
                <div class="alert alert-success alert-dismissible fade show col-12" role="alert">
                <h6>Your Have Been Removed An Event <strong>Successfuly</strong></h6>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                </div>}
                         {this.state.fav.length===0 && <h1 class="entry-title"> <strong>No Favorite</strong> </h1>}
                           
                            <div class="row">
                           
                    
                   {this.state.fav.length>0&& this.state.fav.map((elem, i) => <FavUserEvent flash={this.state.delfav}  elem={elem} key={i} remove={this.remove.bind(this)}  />)}
           
                   </div>
                </div>
            </div>

           }
           <br></br><br></br>
            </div>
          
          
        );
    }
}