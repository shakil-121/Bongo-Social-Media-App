import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";
import { HomeIcon,VideoCameraIcon,BellAlertIcon,UserCircleIcon } from '@heroicons/react/24/solid'


const Header = () => {
  const { user, logout } = useContext(Authcontext);

  const handlelogout = () => {
    logout().then().catch();
  };
  return (
    <div>
      <div className="navbar flex justify-between bg-neutral text-neutral-content px-12">
        <h1 className="normal-case font-extrabold text-white text-2xl px-6">
          Bongo
        </h1>
        <div>
        <Link title="Home" to="/" className="btn btn-ghost normal-case text-xl mx-4">
          <HomeIcon className="h-6 w-6 text-blue-500" />
        </Link>
        <Link title="Video" to="/videos" className="btn btn-ghost normal-case text-xl">
          <VideoCameraIcon className="h-6 w-6 text-blue-500" />
        </Link> 

        {
          user ? <Link title="Notification" to="/notification" className="btn btn-ghost normal-case text-xl mx-4">
          <BellAlertIcon className="h-6 w-6 text-blue-500" />
        </Link>:<></>
        }
        </div>
        <div>
        {user ? (
          <></>
        ) : (
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            Login
          </Link>
        )}
        {user ? (
          <></>
        ) : (
          <Link
            to="/registration"
            className="btn btn-ghost normal-case text-xl"
          >
            Registration
          </Link>
        )}
        </div>
        <div>
          {user ? (
            <Link to="/profile" className="btn btn-ghost normal-case text-xl">
              <UserCircleIcon className="h-6 w-6 text-blue-500" />
            </Link>
          ) : (
            <></>
          )}
          {user ? (
            <div> 
              <span>{user.displayName}</span>
              <button onClick={handlelogout} className="btn btn-primary mx-10">
                Log Out
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
