import React from "react";

interface IInput {
  label: string;
  placeholder: string;
  type?: string;
}

const Input = ({ label, placeholder, type }: IInput) => {
  return (
    <div className="py-3">
      <label
        className="tracking-wide text-gray-700 text-xs"
        htmlFor={`grid-${label}`}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded mt-1 text-sm py-3 px-4 leading-tight focus:outline-none focus:border-primary-fade"
        id={`grid-${label}`}
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
