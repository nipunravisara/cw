import React from "react";

interface ICheckbox {
  label: string;
}

const Checkbox = ({ label }: ICheckbox) => {
  return (
    <div className="flex flex-row my-2">
      <div className="h-5 flex items-center">
        <input
          type="checkbox"
          className="focus:primary h-4 w-4 text-primary border-primary-faded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor={`grid-${label}`}
          className="tracking-wide text-gray-700 text-xs"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
