import React, { ReactElement } from "react";

interface IButton {
  title: string;
  type?: string;
}
const Button = ({ title, type }: IButton): ReactElement => {
  return (
    <input
      type={type || "button"}
      value={title}
      className="px-4 py-3 my-2 w-full font-semibold text-center text-white bg-blue-500 rounded border-1 hover:bg-blue-700 hover:cursor-pointer"
    />
  );
};

export default Button;
