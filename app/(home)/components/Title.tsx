import React from "react";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-green-400 trasnsition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-yellow-500 rounded-full -translate-x-2"></div>
      <div className="w-40 h-2 bg-blue-500 rounded-full translate-x-2"></div>
    </div>
  );
}
