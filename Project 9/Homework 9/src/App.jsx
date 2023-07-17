import { useState } from "react";
import "./App.css";
import { Card } from "./components/CardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
