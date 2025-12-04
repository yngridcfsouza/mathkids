import React, { useEffect, useState } from "react";
import { generateProblem, solve } from "../utils/generator";
import ExerciseCard from "../components/ExerciseCard";
import ScoreBoard from "../components/ScoreBoard";

const symbolMap = { addition: "+", subtraction: "−", multiplication: "×" };

export default function Exercise({ operation, onFinish }) {
  const [problem, setProblem] = useState(generateProblem(operation));
  const [score, setScore] = useState(() => Number(localStorage.getItem("mathkids_score") || 0));
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    localStorage.setItem("mathkids_score", String(score));
  }, [score]);

  function handleCheck(answer) {
    const expected = solve(problem, operation);
    if (Number(answer) === expected) {
      setScore((s) => s + 1);
      setCorrect((c) => c + 1);
      setProblem(generateProblem(operation));
    } else {
      setWrong((w) => w + 1);
    }
  }

  function handleReset() {
    setScore(0);
    setCorrect(0);
    setWrong(0);
    localStorage.removeItem("mathkids_score");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-2xl">
        <ExerciseCard problem={problem} operationSymbol={symbolMap[operation]} onCheck={handleCheck} />
        <ScoreBoard score={score} correct={correct} wrong={wrong} onReset={handleReset} />
        <div className="mt-6 text-center">
          <button onClick={() => onFinish({ score, correct, wrong })} className="px-4 py-2 bg-gray-700 text-white rounded">Encerrar</button>
        </div>
      </div>
    </div>
  );
}
