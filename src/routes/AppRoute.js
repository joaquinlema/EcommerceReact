import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const AppRoute = () => {
    return (
            <Switch>
                <PrivateRoute exact={true} path='/'>
                    <MainPage />
                </PrivateRoute>
                <Route exact path='/register' >
                    <Register />
                </Route>
                {/* <PrivateRoute exact path='/about' component={About} >
                    <About />
                </PrivateRoute>
                <Route exact path='/login' component={Login} >
                    <Login />
                </Route> */}
            </Switch>
    );
};

export default AppRoute