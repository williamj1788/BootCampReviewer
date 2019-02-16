import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './Normalize.css';
import './index.scss';
import Login from './Login';
import SignUp from './SignUp';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
        </div>
    </Router>
)




ReactDOM.render(routing, document.getElementById('root'));
