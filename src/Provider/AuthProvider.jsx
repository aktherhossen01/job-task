/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => { 
    const provider = new GoogleAuthProvider();
    const [user,setUser ]= useState(null)
    const [loading,setLoading]= useState(true)


    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth , provider)
    }

    const signUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const userUpdateProfile =(name,photoUrl)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photoUrl 
           });
     }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false)
            
        })
        return ()=>{
            return unsubscribe()
        }
    },[])


    const AuthInfo={
        user,
        loading,signIn,googleSignIn,signUp,logOut,userUpdateProfile
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;