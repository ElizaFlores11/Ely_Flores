import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import GoPdf from './GoPdf/GoPdf';

const Routes = () => {

    return (

        <Switch>
            <Route  path="/GoPdf">
                <GoPdf />
            </Route>
            <Route  path="/">
                <Home />
            </Route>
            
        </Switch>

    )
}

export default Routes