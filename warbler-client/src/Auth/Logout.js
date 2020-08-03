import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props)=>{
    useEffect(()=>{
        props.setIsLogin(false);
        props.setSuccessRespMsg("You have successfuly Logged Out");
    },[props])

    return(
        <>
            <Redirect to="/login" />
        </>
    )
};

export default Logout;