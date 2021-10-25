import React from 'react';
import { Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PrivateRoute from './PrivateRoute';

const AppRoute = () => {
    return (
            <Switch>
                <PrivateRoute exact={true} path='/'>
                    <MainPage />
                </PrivateRoute>
                {/* <Route exact path='/register' >
                    <Register />
                </Route> */}
            </Switch>
    );
};

export default AppRoute