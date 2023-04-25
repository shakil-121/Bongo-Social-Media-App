import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const Login = () => {
  const { login, user, forgetpassword } = useContext(Authcontext);
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");
  const emailref = useRef();

  const handlelogin = (event) => {
    setsuccess("");
    seterror("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, password, name);

    login(email, password)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        setsuccess("Login successfully !");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  const handleForgetPassword = () => {
    seterror('')
    const email = emailref.current.value;
    if (!email) {
      alert("Please Enter your Email");
      return;
    }

    forgetpassword(email)
      .then(() => {
        alert("Chack you Email");
      })
      .catch(error=>{ 
         seterror(error.message)
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="">
          <div className="text-center my-4">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
          </div>
          <form
            onSubmit={handlelogin}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailref}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forget Password
                  </a>
                </label>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                  <Link
                    to="/registration"
                    className="label-text-alt link link-hover"
                  >
                    Are you New ? Please Registration
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <h1>{success}</h1>
              </div>
              <div className="form-control mt-6 text-red-600">
                <h1>{error}</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
