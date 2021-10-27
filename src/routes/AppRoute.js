import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BuysPage from '../pages/BuysPage';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import NoMatchRoute from '../pages/NoMatchRoute';
import PrivateRoute from './PrivateRoute';

const AppRoute = () => {
    return (
        <Switch>
            <PrivateRoute exact={true} path='/'>
                <MainPage />
            </PrivateRoute>
            <PrivateRoute path="/productDetail/:id" component={DetailPage} />
            <PrivateRoute path="/compras" component={BuysPage} />

            <Route component={NoMatchRoute} />

            {/* <Route exact path='/register' >
                    <Register />
                </Route> */}
        </Switch>
    );
};

export default AppRoute