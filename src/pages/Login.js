import React, { useState } from 'react';
import {auth, provider} from '../firebase-config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

import "../styles/Login.css"

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  
  const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        const name = result.user.displayName;
        const email = result.user.email;
        const photoURL = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("photoURL", photoURL);
      });
      navigate('/');
    }
    const login = () => {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        const name = result.user.displayName;
        const email = result.user.email;
        
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      });
      navigate('/');
    }
  
  return (
    <div className='loginPage'>
      <div className='loginContainer'>
      <div className='loginForm'>
        <h2 className='loginTitle'>Login to your account</h2>
        <div className='inputDiv'>
          <label>E-mail: </label>
          <input
          onChange={(e) => setLoginEmail(e.target.value)}
          type='email' />
        </div>
        <div className='inputDiv'>
          <label>Password: </label>
          <input
          onChange={(e) => setLoginPassword(e.target.value)}
          type='password' />
        </div>
        <button
        onClick={login}
         className='loginBtn'>Login</button>
      </div>
      <div className='bottomLogin'>
        <p className='createP'>Do not have an account? <Link className='registerLink' to='/register'>Create an Account</Link> </p>
        <p className='or'>or</p>
        <button 
      className='googleBtn'
      onClick={signInWithGoogle}> Sign In With Google</button>
      </div>
      </div>
    </div>
  )
}
export default Login;