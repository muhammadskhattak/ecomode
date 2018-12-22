import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import App from '../App/App';
import Home from '../Home/Home';
import About from '../About/About';
import Signup from '../Signup/Signup';
import Partners from '../Partners/Partners';
import Team from '../Team/Team';
import Events from '../Events/Events';
import Products from '../Products/Products';
import PathNotFound from './PathNotFound';

const routing = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/partners" component={Partners} />
                    <Route path="/team" component={Team} />
                    <Route path="/events" component={Events} />
                    <Route path="/products" component={Products} />
                    <Route component={PathNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default routing