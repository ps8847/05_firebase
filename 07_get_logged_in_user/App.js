import "./App.css";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { useEffect, useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
