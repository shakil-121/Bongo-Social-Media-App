
import React, { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import { Link } from "react-router-dom";
import { HandThumbUpIcon } from '@heroicons/react/24/solid'




const Home = () => {
  const { user } = useContext(Authcontext);
  return (
    <div className="p-20"> 
    <h1 className="text-2xl text-white font-bold" >All Post</h1>
      <div className="card lg:card-side bg-white shadow-xl my-6 py-2">
        <figure>
          <img
            style={{ height: "150px", width: "200px" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/330857244_748299463252751_1425238734464611205_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHXUVNyH_Sc5FzS8wDcX_3XLdV4SYLWPp8t1XhJgtY-n9gkPgvYGE4dRaGfSJo43aoxoCbTBqc1w6zd5kR-U_P0&_nc_ohc=pAwIUFoEt6sAX_OCME6&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCzUWbIUg3m-VQG6zGHc4LP5Zz-AJT1ilxhz7yRJdqHZw&oe=644C9B84"
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Post Title : Hello Sir ...</h2>
          <p>
            কারা বলে আমদের দেশ ইউরোপ আমেরিকার মত হতে পারে নাই। এই যে ওদের দেশের
            মানুষ বাহিরে বের হবার আগে ওয়েদার চেক করে বের হয় আর আমরা হই ট্রাফিক
            দেখে । এইটুকুতো পার্থক্য!
          </p>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn btn-primary">Like <HandThumbUpIcon className="h-6 w-6 text-white" /> </button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Like{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-white shadow-xl my-6 py-2">
        <figure>
          <img
            style={{ height: "150px", width: "200px" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/329983419_539685648229102_6456118052288636822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH_f89jJyWIkZuYGPdL6fe_91JFeTqth_z3UkV5Oq2H_C8SEf_T8Pw1xs00d83EaLy9X8mL3vrjBmyi_m1IMoLh&_nc_ohc=wpZnlD4ptBQAX-1lfgc&_nc_ht=scontent.fdac151-1.fna&oh=00_AfD3ur8FukcDwG6bOnQv9-Xji5dzRm5Eil7B5wTo2h4QCw&oe=644D0839"
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Post Title : How are You sir ? </h2>
          <p>
            And then there was rain... -বৃষ্টি নামা বাসন্তী চা চক্র, -- সঞ্জীব
            চত্বর, টিএসসি, ঢাকা বিশ্ববিদ্যালয়, ঢাকা
          </p>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn btn-primary">Like <HandThumbUpIcon className="h-6 w-6 text-white" /></button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Like{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-white shadow-xl my-6 py-2">
        <figure>
          <img
            style={{ height: "150px", width: "200px" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/337870706_557339979866653_2298511277973178825_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjjdp4bp6H99WiUax5EMgVvr1VIG7IpSW-vVUgbsilJT0jJtKiWJNv8S9jTFUYlJZhIRZtFTJBsvpbPf8kQTOY&_nc_ohc=seSXMNpVpFUAX-avw43&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAG9i2Owi7a98cnNdD1QT00s96jg5iUH-Vf4yjMh3i5IA&oe=644C7468"
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">তুমি কি আকাশ চেনো?</h2>
          <p>তুমি কি আকাশ চেনো? চেনো না! তবে চিনবে কেমন করে এই আমাকে?</p>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn btn-primary">Like <HandThumbUpIcon className="h-6 w-6 text-white" /></button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Like{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-white shadow-xl my-6 py-2">
        <figure>
          <img
            style={{ height: "150px", width: "200px" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/324928019_517180940401890_2463592613994941425_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG9qBVrUSoI1wLj7j7dNxQKZQV5AI33xQFlBXkAjffFAQ5JaTZNTuwqO4PoKgjeSP41qQwu9TE08S9PTyJdHGSI&_nc_ohc=GKtbcjW_BBsAX9XbSmh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAcY8iWbL72yE4yLQb7eZuYG3wr3zPx_fyngVPUiDUoQQ&oe=644D3C54"
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Attitude king</h2>
          <p>Enjoy every moment of your life because you don't know what will happen tomorrow.🥰🙃</p>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn btn-primary">Like<HandThumbUpIcon className="h-6 w-6 text-white" /></button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Like{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-white shadow-xl my-6 py-2">
        <figure>
          <img
            style={{ height: "150px", width: "200px" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/326257188_528778769351143_2809627556814422617_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHgQJrBGqQM6U2OB0OnMXVIlLY-pPhUB0KUtj6k-FQHQnBCAgyWhObaW5YWyQzSHklmcEFr_dx7OSEz13Of2Sbp&_nc_ohc=yzyBLRO-ZUwAX-5zpPA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfC_SPy3-_IxUiXiBkqYBajQfrOiUyl72coPKQCqD2b93w&oe=644BFDF9"
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn btn-primary">Like <HandThumbUpIcon className="h-6 w-6 text-white" /></button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Like{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-white shadow-xl my-6 py-2">
        <figure>
          <img
            style={{ height: "150px", width: "200px" }}
            src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/328816505_590100729629512_1726305557167948443_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEWgvroV8PDmR8m4phr30k0fm8jvwEI3qR-byO_AQjepOUZee_79d8w7W1iMFvOaK2Bi5x608E25MNVin26WplR&_nc_ohc=lXWJBGGSDMwAX-2chZ3&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCpSBGzqOLELkv9hhbsF98rLa5Lv5bC9XqRm26Ppg3UIA&oe=644CDF65"
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn btn-primary">Like <HandThumbUpIcon className="h-6 w-6 text-white" /></button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Like{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
