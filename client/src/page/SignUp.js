import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

import "../App.css"

const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        if( email && password ){
            navigate("/login")
        }else{
            setErrorMsg("Please enter both email and password.")
        }
  
      }

    return(

        <div className="FormContainer">
        <form>

            <h3 className="TextCenter">Sign Up</h3>
            <br/>
            <label htmlFor="email">Email: </label><br/>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

            <br /> <br /> 

            <label htmlFor="pwd">Password: </label><br/>
            <input type="password" id="pwd" name="pwd" onChange={(e) => setPassword(e.target.value)} required />

            <br /><br /> 

            <p className="ErrorMsg">{errorMsg}</p>

            <button onClick={onSubmit} className="SubmitBtn">Submit</button>

            <br/>

            <p>
                Already have an account?{' '}
                <NavLink to="/login" >
                    Login
                </NavLink>
            </p>

        </form>

             
        </div>

    )
}

export default SignUp;