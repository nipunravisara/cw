import React, { ReactElement } from "react";

interface IButton {
  title: string;
}
const Button = ({ title }: IButton): ReactElement => {
  return (
    <div className="border-1 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold py-3 text-center px-4 rounded my-2 ">
      {title}
    </div>
  );
};

export default Button;
