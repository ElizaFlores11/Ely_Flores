import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home';

const Routes = () => {

    return (

        <Switch>
            <Route  path="/">
                <Home />
            </Route>
        </Switch>

    )
}

export default Routes