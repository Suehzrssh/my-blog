import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css";

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const navigate = useNavigate();


    const register = async () => {
       try {
        const user = await createUserWithEmailAndPassword(auth, email, password, username);
        console.log(user);
       } catch (error) {
        console.log(error.message);
       }
       navigate('/login');
    }
  return (
    <div className='registerPage'>
        <div className='registerContainer'>
        <h2>Create an Account</h2>
        <div className='inputDiv'>
            <label>Username: </label>
            <input
            onChange={(e) => setUsername(e.target.value)} 
            type='text'
            />
        </div>
        <div className='inputDiv'>
            <label>Email: </label>
            <input
            onChange={(e) => setEmail(e.target.value)} 
            type='email'
            />
        </div>
        <div className='inputDiv'>
            <label>Password: </label>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            />
        </div>
        <button
        className='registerBtn'
        onClick={register}
        >Create Account</button>
        </div>
    </div>
  )
}

export default Register;