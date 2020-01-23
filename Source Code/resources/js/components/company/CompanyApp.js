
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route,} from 'react-router-dom'
import Edit from './Edit';
import Form from './Form';
import Crequest from './Crequest';
import Approved from './Approved';
export default class CompanyApp extends Component{
   
    render()
    {
       
        return (
          <div>

<BrowserRouter>
  
        <div>
    <Route path="/data/:id" render={props=><Edit{...props}/>}/>
    <Route path="/pending" component={Crequest}/>
    {/* <Route path="/company" component={Form}/> */}
    <Route path="/writer" component={Form}/>
    <Route path="/approved" component={Approved}/>

    </div>
    </BrowserRouter>

 
</div>
        )
}
}

