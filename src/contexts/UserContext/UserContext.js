import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext()
const provider = new GoogleAuthProvider();
const auth=getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    

    const createUser=( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login=(email, password)=>{
        // বুঝি নাই 

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
       
    };
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    };

    useEffect(()=>{
     const unSubscribe=  onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return()=> unSubscribe();
    },[])
    const authInfo={user,loading, createUser, googleSignIn,login, logout}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;