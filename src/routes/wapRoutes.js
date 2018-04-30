import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wap from './../Wap';
import Demo from './../Demo';

const WapRoutes = (
        <Switch>
                <Route eaxct path="/wap" component={Wap} />
                <Route path='/demo/:compName' component={Demo} />
        </Switch>
)

export default WapRoutes;