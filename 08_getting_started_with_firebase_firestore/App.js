import "./App.css";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Amrtsar",
      pincode: 1234,
      lat: 123,
      long: 456,
    });

    console.log("result", result);
  };

  const makesubCollection = async () => {
    const result = await addDoc(
      collection(firestore, "cities/OarL8Yuo2TUH9tga0Bjd/places"),
      {
        name: "this isa place",
        desc: "awsm description",
        date: Date.now(),
      }
    );

    console.log("result", result);
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "OarL8Yuo2TUH9tga0Bjd");

    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };

  const update = async () => {
    const docRef = doc(firestore, "cities", "OarL8Yuo2TUH9tga0Bjd");
    await updateDoc(docRef, {
      name: "New Delhi",
    });
  };
  return (
    <div className="App">
      <h1>Firebase firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makesubCollection}>Put sub Data</button>
      <button onClick={getDocument}>get Data</button>
      <button onClick={getDocumentsByQuery}>get documents by query</button>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default App;
