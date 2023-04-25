import React from 'react';
import Lottie from "lottie-react"
import error from "../../assets/61372-404-error-not-found.json";


const Error = () => {
    return (
        <div>
            <Lottie animationData={error} loop={true} />;
        </div>
    );
};

export default Error;