import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const Authcontext=createContext(null)
const auth=getAuth(app)

const Authprovider = ({children}) => {
    const [user,setuser]=useState(null); 
    const [lodding,setlodding]=useState(true)

    const createuser=(email,password)=>{ 
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{ 
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logout=()=>{
        return signOut(auth)
    }
    
    const forgetpassword=(email)=>{ 
       return sendPasswordResetEmail(auth,email)
    }
   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{  
        console.log(currentUser);
        setuser(currentUser);
        setlodding(false);
    })
    return ()=>{ 
       unsubscribe();
    }
   },[])

    const Authinfo={ 
        user, 
        createuser,
        login, 
        logout,
        forgetpassword,
        lodding
    }

    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;