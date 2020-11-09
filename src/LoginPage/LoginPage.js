
import React from 'react';
import Input from '../SharedComponents/Input/Input';
import classes from './LoginPage.module.css';

const LoginPage = () =>{
    
    return (
        <div className={classes.loginContainer}>
            <form>
                <Input type="text" name="username" id="username" label="Username"/>
                <Input type="password" name="password" id="password" label="Password"/>
               
            </form>
        </div>
    )
}

export default LoginPage;