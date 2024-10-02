import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { updateProfile } from "firebase/auth";

import "../App.css"

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        // TODO Part 1: set auth variable here

        if( email && password ){

            // TODO Part 1: call Firebase signInWithEmailAndPassword function here.
            // Remember to import and set the auth variable following documentation!

            navigate("/") // navigate to home page after successfully signed in, , think where to put this!

            // TODO 2: After successful login, before navigating to Home page, 
            // let's trim first part of the email for user's display name!
        }
        else{
            setErrorMsg("Please enter both email and password.")
        }
      }

    return(

        <div className="FormContainer">
        <form>

            <h3 className="TextCenter">Login</h3>
            <br/>
            <label htmlFor="email">Email: </label><br/>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>

            <br /> <br /> 

            <label htmlFor="pwd">Password: </label><br/>
            <input type="password" id="pwd" name="pwd" onChange={(e) => setPassword(e.target.value)} required/>

            <br /><br /> 

            <p className="ErrorMsg">{errorMsg}</p>

            <button onClick={onSubmit} className="SubmitBtn">Submit</button>

            <br/>

            <p>
                Don't have an account?{' '}
                <NavLink to="/signup" >
                    Register
                </NavLink>
            </p>

        </form>

             
        </div>

    )
}

export default SignIn;