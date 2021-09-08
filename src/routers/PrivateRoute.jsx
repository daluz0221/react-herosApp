import React from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({
    isAuth, 
    component: Component,
    ...res
}) => {

    console.log(res.location.search);

    localStorage.setItem('lastPath', res.location.pathname);
    localStorage.setItem('lastQuery', res.location.search);

    return (
        <Route {...res}
            component={(props)=>(
                (isAuth)
                ? <Component {...props}/> : <Redirect to="/login" />
            )}
        />
    )
}



PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute
