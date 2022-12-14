import { useEffect, useState } from "react";
import "./App.css";
import Advice from "./components/Advice";

function App() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  function handleClick() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
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
  }, []);

  return (
    <main className="container flex h-screen items-center justify-center">
      <Advice id={id} advice={advice} handleClick={handleClick} />
    </main>
  );
}

export default App;
