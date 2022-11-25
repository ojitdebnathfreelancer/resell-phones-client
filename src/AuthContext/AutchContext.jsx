import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const resellContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AutchContext = ({ children }) => {

    const [user, setUser] = useState({});

    const userCreate = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    };
    // create user with email and password

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // user login by email and password 

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider);
    };
    // user signup with google 

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    };
    // update user info 

    const userLogout = () =>{
        return signOut(auth);
    };
    // user logout 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])
    // user ovjerver 

    const authInfo = { user, userCreate, userLogin, googleUser, userLogout, updateUser};

    return (
        <div>
            <resellContext.Provider value={authInfo}>
                {children}
            </resellContext.Provider>
        </div>
    )
};

export default AutchContext;