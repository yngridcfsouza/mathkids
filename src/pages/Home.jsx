import React from "react";
import OperationSelector from "../components/OperationSelector";

export default function Home({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-sky-100 to-yellow-100 p-8">
      <h1 className="text-5xl font-extrabold mb-6 text-sky-700">MathKids</h1>
      <p className="mb-8 text-lg text-gray-700">Escolha uma operação para começar:</p>
      <OperationSelector onSelect={onStart} />
      <p className="mt-8 text-sm text-gray-600">Projeto de extensão — Treinador de operações básicas</p>
    </div>
  );
}
