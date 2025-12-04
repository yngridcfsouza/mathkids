import { useState } from "react";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Result from "./pages/Result";

export default function App() {
  const [route, setRoute] = useState("home");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  function handleStart(op) {
    setOperation(op);
    setRoute("exercise");
  }

  function handleFinish(res) {
    setResult(res);
    setRoute("result");
  }

  function handleRestart() {
    setRoute("home");
    setOperation(null);
    setResult(null);
  }

  return (
    <>
      {route === "home" && <Home onStart={handleStart} />}
      {route === "exercise" && <Exercise operation={operation} onFinish={handleFinish} />}
      {route === "result" && <Result result={result} onRestart={handleRestart} />}
    </>
  );
}
