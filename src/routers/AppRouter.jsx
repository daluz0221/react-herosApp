import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
 
} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';

import DasboardRoutes from './DasboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'


const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
            <div>
            
            
            
            <Switch>
                <PublicRoute exact path="/login" 
                component={LoginScreen}
                isAuth={user.logged}
                />
                <PrivateRoute
                path="/" 
                component={DasboardRoutes}
                isAuth={user.logged}
                />
            </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
