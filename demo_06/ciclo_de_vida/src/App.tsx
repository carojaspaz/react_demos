import { useState } from "react";
import "./App.css";

// Components
import ComponentMounting from "./components/Mounting";
import Counter from "./components/Updating";
import Clock from "./components/Unmounting";
import RelojFuncional from "./components/Usinghooks";
import Errorhandling from "./components/Errorhandling";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <ComponentMounting />
      <hr />
      <Counter />
      <hr />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Ocultar" : "Mostrar"} Reloj con unmounting
      </button>
      {toggle && <Clock />}
      <hr />
      {toggle && <RelojFuncional />}
      <hr />
      <Errorhandling>
        <ErrorComponent />
      </Errorhandling>
    </>
  );
}

export default App;
