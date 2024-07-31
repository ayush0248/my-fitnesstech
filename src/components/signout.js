import React from 'react';
import './SignOut.css';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

const SignOut = () => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Signed out");
        }).catch((error) => {
            console.error("Error signing out: ", error);
        });
    };

    return (
        <button onClick={handleSignOut} className="signout-button">Sign Out</button>
    );
};

export default SignOut;
