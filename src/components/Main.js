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

            <footer>
                <div><h6>© Copyright Mat, 2021</h6></div>
            </footer>
        </BrowserRouter>
    )
}

export default Main;
