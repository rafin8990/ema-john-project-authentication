import React, { useContext} from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import './Login.css';

const Login = () => {
    
   
    const location=useLocation();  

    const from=location.state?.from?.pathname || "/"
    const {login, googleSignIn , logout}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)        
        login(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user); 
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error=>console.error(error));
    };

    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
            const user=result.user;
            console.log(user)
            Navigate(from, {replace: true});
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleLogOut=()=>{
        logout()
        .then(()=>{

        })
        .catch((error) => {
});
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login </h1>
            <form onSubmit={handleLogin} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <button className='btn-submit' type='submit'>Log In </button>
                <button onClick={handleLogOut} className='btn-submit' type='submit'>Log Out</button>
            </form>
            <p>New to ema john? <Link to='/signup'>Create a new account</Link> </p>
            <button onClick={handleGoogle} className='btn-google'>Sign In With Google</button>
        </div>
    );
};

export default Login;