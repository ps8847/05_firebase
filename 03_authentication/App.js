import "./App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignUp from "./pages/Signup";

const auth = getAuth(app);

function App() {
  const signupuser = () => {
    createUserWithEmailAndPassword(
      auth,
      "ps789650@gmail.com",
      "prihgcvchfdfxcgf"
    ).then((value) => console.log(value));
  };
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
