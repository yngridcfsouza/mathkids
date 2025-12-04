import React, { useState } from "react";

export default function ExerciseCard({ problem, operationSymbol, onCheck }) {
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onCheck(answer);
    setAnswer("");
  }

  return (
    <div className="p-8 bg-white rounded-3xl shadow-xl w-full max-w-xl border-4 border-sky-200">
      <div className="text-5xl text-center mb-6 text-sky-700">
        {problem.a} {operationSymbol} {problem.b} = ?
      </div>
      <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
        <input
          inputMode="numeric"
          value={answer}
          onChange={(e) => setAnswer(e.target.value.replace(/[^0-9-]/g, ""))}
          className="border-2 rounded-2xl px-6 py-3 w-48 text-center text-3xl"
          aria-label="Resposta"
        />
        <button type="submit" className="px-6 py-3 bg-fuchsia-500 text-white rounded-2xl text-2xl shadow hover:brightness-110">
          OK
        </button>
      </form>
    </div>
  );
}
