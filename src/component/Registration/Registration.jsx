import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";
import { sendEmailVerification, updateProfile } from "firebase/auth"; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';



const Registration = () => { 
 const {createuser}=useContext(Authcontext)

 const handelRegistration=event=>{ 
   event.preventDefault();
    const form=event.target; 
    const email=form.email.value; 
    const password=form.password.value; 
    const name=form.name.value; 
    console.log(email,password,name); 
    event.target.reset();

    createuser(email,password)
    .then(result=>{ 
        const loggeduser=result.user; 
        console.log(loggeduser); 
        updateuserdata(loggeduser,name) 
        toast("Registration Successful !!"); 
        sendVerifyEmail(loggeduser) 

    }) 
    .catch(error=>{ 
        console.log(error);
    })
 } 

 const updateuserdata=(user,name)=>{ 
  updateProfile(user,{ 
    displayName:name
  }) 
  .then()
  .catch()
 }

// varify by email  
const sendVerifyEmail=(user)=>{ 
  sendEmailVerification(user) 
  .then(()=>{ 
    alert('Please confirm your Email, we send a Email')
  })
  .catch(error=>{ 
    console.log(error);
  })
}

  return (
    <div className="hero min-h-screen ">
      <div className="">
        <div className="text-center my-4">
          <h1 className="text-5xl font-bold text-white">Registration Form</h1>
        </div>
        <form onSubmit={handelRegistration} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" 
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                name="password"
                type="password" 
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to='/login' className="label-text-alt link link-hover">
                  Already have an Account ! Login 
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div> 
    </div>
  );
};

export default Registration;
