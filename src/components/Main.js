import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// -> components imports
import Home from './Home';
import Portfolio from './Portfolio';
import NavBar from './NavBar';

const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
            </div>

            <div>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/portfolio"} component={Portfolio} />
            </div>
        </BrowserRouter>
    )
}

export default Main;
