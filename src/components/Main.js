import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

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

            <footer>
                <div><h6>© Copyright Mat, 2021 --> Crafted with <BsHeartFill style={{fontSize: '0.8rem'}} /></h6></div>
            </footer>
        </BrowserRouter>
    )
}

export default Main;
