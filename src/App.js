import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/ReactTravel' exact component={Home} />
                    <Route path='/ReactTravel/services' component={Services} />
                    <Route path='/ReactTravel/products' component={Products} />
                    <Route path='/ReactTravel/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
