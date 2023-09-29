import "./App.css";
import { useState } from "react";
import { useFirebase } from "./context/Firebase";

function App() {
  const Firebase = useFirebase();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  console.log("firebase", Firebase);
  return (
    <div className="App">
      <h1>Firebase app</h1>
      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter email"
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter password"
      />
      <button
        onClick={() => {
          Firebase.signupUserWithEmailAndPassword(email, password);
          Firebase.putData("users/" + "princesharma", { email, password });
        }}
      >
        SignUp
      </button>
    </div>
  );
}

export default App;
