import React from "react";

interface ITitle {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: ITitle) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <h4 className="text-sm text-gray-400">{subtitle}</h4>
    </div>
  );
};
