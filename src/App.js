import Form from "./components/Form";
import Logo from "./components/Logo";
import "./styles/Api.scss";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [arrayNumber, setArrayNumber] = useState([]);

  return (
    <div className="App">
      <Logo />
      <Form arrayNumber ={arrayNumber} setArrayNumber ={setArrayNumber} />
      <Stats arrayNumber ={arrayNumber} setArrayNumber ={setArrayNumber} />
    </div>
  );
}

export default App;
