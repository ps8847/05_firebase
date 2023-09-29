import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-page">
      <h1>Sign In Page</h1>
      <label>Enter your email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
      />
      <label>Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password here"
      />
      <button onClick={() => signinUser()}>Signin me in</button>
    </div>
  );
}
