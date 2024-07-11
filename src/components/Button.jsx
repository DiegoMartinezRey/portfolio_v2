import React from "react";

const Button = ({ title }) => {
  return (
    <>
      <button className="bg-slate-600 text-white py-1 px-2 rounded-lg">
        {title}
      </button>
    </>
  );
};

export default Button;
