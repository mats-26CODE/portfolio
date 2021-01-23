import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// -> components imports
import Home from './Home';
import Portfolio from './Portfolio';


const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/portfolio"} component={Portfolio} />
            </div>
        </BrowserRouter>
    )
}

export default Main;
