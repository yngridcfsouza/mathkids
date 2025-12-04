import React from "react";

export default function OperationSelector({ onSelect }) {
  return (
    <div className="flex gap-6 justify-center">
      <button
        onClick={() => onSelect("addition")}
        className="px-8 py-6 rounded-2xl bg-pink-400 text-white text-3xl shadow-xl border-4 border-white/60 hover:scale-105 active:scale-95 transition-transform"
      >
        +
      </button>
      <button
        onClick={() => onSelect("subtraction")}
        className="px-8 py-6 rounded-2xl bg-yellow-400 text-white text-3xl shadow-xl border-4 border-white/60 hover:scale-105 active:scale-95 transition-transform"
      >
        −
      </button>
      <button
        onClick={() => onSelect("multiplication")}
        className="px-8 py-6 rounded-2xl bg-lime-500 text-white text-3xl shadow-xl border-4 border-white/60 hover:scale-105 active:scale-95 transition-transform"
      >
        ×
      </button>
    </div>
  );
}
