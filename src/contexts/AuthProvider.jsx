import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from "../firebase/firebase.config"
import {GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);


    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signUpWithGmail =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const login =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe()
        }
    }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logOut,
        signUpWithGmail
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;