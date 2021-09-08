import React from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const PublicRoute = ({
    isAuth, 
    component: Component,
    ...res
}) => {


    return (
        <Route {...res}
            component={(props)=>(
                (!isAuth)
                ? <Component {...props}/> : <Redirect to="/" />
            )}
        />
    )
}



PublicRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute
