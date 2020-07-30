import React from 'react'
import { Switch, Route } from "react-router-dom";
import Project from './Project/Project';
import Tech from './Tech/Tech';
import Soft from './Soft/Soft';
import Home from './Home/Home';

const Routes = () => {

    return (

        <Switch>
            <Route exact path="/project"  >
                <Project/>
            </Route>
            <Route exact path="/tech"  >
                <Tech/>
            </Route>
            <Route exact path="/soft"  >
                <Soft/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>

    )
}

export default Routes