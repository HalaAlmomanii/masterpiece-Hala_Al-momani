import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App component


import Admin from './components/admin/Admin'
import CompanyApp from './components/company/CompanyApp';
import User from './components/user/User';
// change the getElementId from example to app 
// render App component instead of Example
if (document.getElementById('root')) {
    ReactDOM.render(<CompanyApp/>, document.getElementById('root'));
}


if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>;
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>;
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>;
