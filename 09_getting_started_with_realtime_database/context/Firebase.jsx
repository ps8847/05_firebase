import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "your data",
  authDomain: "your data",
  projectId: "your data",
  storageBucket: "your data",
  messagingSenderId: "your data",
  appId: "your data",
  databaseURL: "your data",
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [name, setname] = useState("");
  const putData = (key, data) => set(ref(database, key), data);

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  //get(child(ref(database), "grandfather/father")).then((snapshot) =>
  //  console.log(snapshot.val())
  //);

  //onValue(ref(database, "grandfather"), (snapshot) =>
  //  console.log(snapshot.val())
  //);

  useEffect(() => {
    onValue(ref(database, "grandfather/father/child"), (snapshot) =>
      setname(snapshot.val().name)
    );
  }, []);
  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      <h3>name is {name}</h3>
      {props.children}
    </FirebaseContext.Provider>
  );
};
