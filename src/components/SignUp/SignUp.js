import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import './SignUp.css'

const SignUp = () => {

    const {createUser,googleSignIn}=useContext(AuthContext);

    const [error, setError]= useState(null);

        const handleSignUp=(event)=>{
            event.preventDefault();
            const form=event.target;
            const email=form.email.value;
            const password=form.password.value;
            const confirm=form.confirm.value;

            console.log(email,password,confirm)

            if(password.length<6){
                setError('password should be 6 characters long')
                return;
            }
            if(password !== confirm){
                setError('Password did not match');
                return;
            };
            createUser(email, password)
            .then(result=>{
                const user=result.user;
                console.log(user); 
            })
            .catch(error=>console.error(error));
        }

        const handleGoogle=()=>{
            googleSignIn()
            .then(result=>{
                const user=result.user;
                console.log(user)
            })
            .catch(error=>{
                console.error(error);
            })
        }
    return (
        <div className='form-container1'>
        <h1 className='form-title'>Sign Up </h1>
        <form  onSubmit={handleSignUp}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' required/>
                <p><small>{error}</small></p>
            </div>
            <button className='btn-submit' type='submit'>SignUp</button>
        </form>
        <p>Already have an Account? <Link to='/login'>Please Login</Link> </p>
        <button onClick={handleGoogle} className='btn-google'>Sign In With Google</button>
    </div>
    );
};

export default SignUp;