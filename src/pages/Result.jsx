import React from "react";

export default function Result({ result, onRestart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 via-sky-100 to-orange-100 p-8">
      <h2 className="text-4xl font-extrabold mb-6 text-emerald-700">Resultado</h2>
      <div className="text-2xl">Pontos: {result.score}</div>
      <div className="mt-2 text-xl">Acertos: {result.correct} • Erros: {result.wrong}</div>
      <div className="mt-8">
        <button onClick={onRestart} className="px-6 py-3 bg-blue-500 text-white rounded-2xl text-xl shadow hover:scale-105 active:scale-95 transition-transform">Voltar ao início</button>
      </div>
    </div>
  );
}
