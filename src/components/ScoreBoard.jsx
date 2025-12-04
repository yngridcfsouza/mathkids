import React from "react";

export default function ScoreBoard({ score, correct, wrong, onReset }) {
  return (
    <div className="mt-6 text-center bg-white/80 rounded-2xl shadow p-6 border-4 border-yellow-200">
      <div className="text-3xl text-rose-600">Pontos: {score}</div>
      <div className="mt-2 text-xl">Acertos: {correct} • Erros: {wrong}</div>
      <div className="mt-4">
        <button onClick={onReset} className="px-6 py-3 bg-red-500 text-white rounded-2xl text-xl shadow hover:scale-105 active:scale-95 transition-transform">Reiniciar</button>
      </div>
    </div>
  );
}
