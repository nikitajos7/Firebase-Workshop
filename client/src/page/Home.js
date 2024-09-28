import React, { useState, useEffect } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar.js'
import axios from 'axios'

import { ClipLoader } from 'react-spinners';
import "../App.css"

import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";



const AllUsersDisplay = () => {

    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [currUser, setCurrUser] = useState(null)

    useEffect(()=> {

        onAuthStateChanged(auth,(user)=> {
            if( user ){
                setCurrUser(user)
            }
        })

    },[])


    return(
        <div>
            <Navbar />
                <div className="UserBox">
                    <h1 className="TextCenter">If you see a secret image below, then you have implemented Firebase signup/login!!</h1>
                    <div className="CenterContainer">
                        { currUser ? <img src="https://www.thewildcardshop.com/wp-content/uploads/2021/02/LWP83.jpg" /> : null }
                    
                    </div>
                </div>

        </div>
    )
}


export default AllUsersDisplay;