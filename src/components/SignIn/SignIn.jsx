import React from 'react';
import Login from '../../pages/auth/Login/Login';
import Register from '../../pages/auth/Register/Register';
import { SignInContainer } from './SignIn.style';

const SignIn = () => {
    return (
        <SignInContainer>
            <Login />
            <Register />
        </SignInContainer>
    );
};

export default SignIn;
