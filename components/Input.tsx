import React from "react";
import {
  useController,
  Control,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { ISignUpForm } from "../pages/signup";

interface IInput {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  control: Control;
}

const Input = (props: IInput & UseControllerProps<FieldValues>) => {
  const { field } = useController(props);

  return (
    <div className="py-3">
      <label
        className="text-xs tracking-wide text-gray-700"
        htmlFor={`grid-${props.name}`}
      >
        {props.label}
      </label>
      <input
        className="block px-4 py-3 mt-1 w-full text-sm leading-tight text-gray-700 bg-white rounded border border-gray-200 appearance-none focus:outline-none focus:border-primary-fade"
        id={`grid-${props.name}`}
        placeholder={props.placeholder}
        type={props.type || "text"}
        {...field}
      />
    </div>
  );
};

export default Input;
