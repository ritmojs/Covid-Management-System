import React from 'react'
import { Navigate } from 'react-router-dom'
import { signout } from '../services/user-service'
const Signout = () => {
    const performRedirect = () => {

        return <Navigate to="/" />;
    }

    const add = () => {
        performRedirect()
    }

    signout(add);




    return (

        <div>
            {performRedirect()}
        </div>
    )
}
export default Signout;
