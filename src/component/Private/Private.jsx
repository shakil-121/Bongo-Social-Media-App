import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => { 
    const {user,lodding}=useContext(Authcontext) 
    
    if(lodding)
    {
        return <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Processing...
      </button>
    }
    if(user){ 
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default Private;