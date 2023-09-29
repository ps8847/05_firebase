import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  return (
    <div className="signup-page">
      <br />
      <button onClick={() => signupWithGoogle()}>Sign in using google</button>
    </div>
  );
};

export default SignUp;
