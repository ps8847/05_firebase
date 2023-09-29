import "./App.css";

import { useFirebase } from "./context/Firebase";

function App() {
  const Firebase = useFirebase();

  console.log("firebase", Firebase);

  const putDataNew = () => {
    //Firebase.putData("root/a/b", { id: 1 });
    //Firebase.putData("grandfather/father/child", {
    //  id: 1,
    //  name: "Prince",
    //  age: 21,
    //});
  };
  return (
    <div className="App">
      <h1>Firebase app</h1>

      <button onClick={putDataNew}>Trigger</button>
    </div>
  );
}

export default App;
