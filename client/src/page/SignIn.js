import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
        const auth = getAuth();


        if( email && password ){

            // TODO Part 1: call Firebase signInWithEmailAndPassword function here.
            // Remember to import and set the auth variable following documentation!
            signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in 
            const user = userCredential.user;
                if( user.displayName === null ){
                    try {
                        const tempDisplayName = user.email.slice(0, user.email.indexOf('@'))
                        await updateProfile(user, {
                          displayName: tempDisplayName,
                        });
                        console.log("Display name updated to ", tempDisplayName);
                    } catch (error) {
                        console.error("Error updating profile:", error);
                    }
                }

            navigate("/")
    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if( errorMessage.includes("invalid-credential")){
                setErrorMsg("Email or password incorrect")
            }
        });

             // navigate to home page after successfully signed in, , think where to put this!

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