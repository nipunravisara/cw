import React, { ReactElement } from "react";

interface ITitle {
  title: string;
  subtitle?: string;
  action?: ReactElement;
}

export const Title = ({ title, subtitle, action }: ITitle) => {
  return (
    <div className="flex flex-row justify-between my-8">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <h4 className="text-sm text-gray-400">{subtitle}</h4>
      </div>
      <div className="text-right">{action}</div>
    </div>
  );
};
