import React, { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const Profile = () => { 
    const {user}=useContext(Authcontext)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/74918019_637397093456570_7635552954287652864_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHlRJusQS_kKHQ-iicCdEc7pU7vYhuF1EylTu9iG4XUTCvKpC1N84LkZJ8nCmXNc1lKbm0SOqM72ED_IA5zE1iP&_nc_ohc=pygs0GHzPdQAX_LpIC6&_nc_ht=scontent.fdac151-1.fna&oh=00_AfA3Qo1usWAn8KpisOFWc9SjCNYZ3iXYhwx_2wt02W5XVA&oe=647004D1"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{user.displayName}</h2>
          <p>Email : {user.email}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
