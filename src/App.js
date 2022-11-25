import { useEffect, useState } from "react";
import "./App.css";
import Advice from "./components/Advice";

function App() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  async function handleClick() {
    // const response = await fetch("https://api.adviceslip.com/advice");
    // const result = await response.json();
    // console.log(JSON.stringify(result));
    // setId(result.slip.id);
    // setAdvice(result.slip.advice);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setId(data.slip.id);
        setAdvice(data.slip.advice);
      });

    console.log(id);
    console.log(advice);
  }

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setId(data.slip.id);
        setAdvice(data.slip.advice);
      });
  });

  return (
    <div className="container flex h-screen items-center justify-center">
      <Advice id={id} advice={advice} handleClick={handleClick} />
    </div>
  );
}

export default App;
