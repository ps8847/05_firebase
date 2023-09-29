import "./App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignIn from "./pages/SignIn";

const auth = getAuth(app);

function App() {
 
  return (
    <div className="App">
    
      <SignIn />
    </div>
  );
}

export default App;
