import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Web from './../Web';
import Home from './../Home';
import Wap from './../Wap';
import HeaderUI from './../wap-components/HeaderUI';
import SearchUI from './../wap-components/SearchUI';

const AppRoutes = (
    <Switch>
        {/* Wap routes */}
        <Route path='/wap/header' component={HeaderUI} />
        <Route path='/wap/search-page' component={SearchUI} />
        <Route exact path="/wap" component={Wap} />

        {/* Web routes */}
        <Route path="/web" component={Web} />

        {/* other routes */}
        <Route exact path="*" component={Home} />
    </Switch>
)

export default AppRoutes;