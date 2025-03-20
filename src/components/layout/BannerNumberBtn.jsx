import React from "react";

const NumberButton = ({ number, label }) => {
  return (
    <button className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center w-8 h-8 bg-sky-500/75 text-white rounded-full">
        {number}
      </span>
      <span className="font-bold text-sky-500/75">{label}</span>
    </button>
  );
};

export default NumberButton;
