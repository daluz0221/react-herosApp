import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);
    

    const handleClick = () => {
        // history.push('/');
        // history.replace('/');

        const lastPath = localStorage.getItem('lastPath') || '/';
        const lastQuery = localStorage.getItem('lastQuery') || '';

        const finalQuery = `${lastPath}${lastQuery}`;
        

        dispatch({
            type: types.login,
            payload: {
                name:'Luis Felipe'
            }
        });

        history.replace(finalQuery);

    }



    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
            className="btn btn-primary"
            onClick={handleClick}
            >
                Login
              
            </button>
        </div>
    )
}

export default LoginScreen
