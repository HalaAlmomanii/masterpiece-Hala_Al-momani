import React, { Component } from 'react';

export default class UserCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
              
    }
   
 
    render() {
      const{user,elem}=this.props
  
       return (
<div> 
< input type="checkbox"   defaultChecked={user.reduce((acc,e)=>{
return acc || (e.type===elem.type)},false)}  name={elem.id} onChange={this.props.changeCat.bind(this)} />
 <strong>{elem.type}</strong>  <br/>   
  </div>


)


    }
  
  }