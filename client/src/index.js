import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import './Normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Browse from './Components/Browser/Browse';
import notFound from './Components/notFound';
import CampPage from './Components/CampPage/CampPage';
import Dashboard from './Components/Dashboard/Dashboard';



const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route path="/browse/:id" component={CampPage}/>
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={notFound} />
            </Switch>
        </div>
    </Router>
)




ReactDOM.render(routing, document.getElementById('root'));
