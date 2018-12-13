import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import './Stylesheets/index.css';
import App from './App/App';
import Home from './Home/Home';
import About from './About/About';
import Signup from './Signup/Signup';
import PathNotFound from './GlobalComponents/PathNotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Signup" component={Signup} />
                <Route component={PathNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
