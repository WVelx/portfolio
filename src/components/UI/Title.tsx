import React from "react";

interface TitleProps {
  number: number;
  text: string;
}

export function Title({ number, text }: TitleProps) {
  return (
    <div className="my-5">
      <h2
        className="relative font-bold lg:text-3xl md:text-2xl"
        id={`title-${text.toLowerCase().replace(/\s/g, "-")}`}
      >
        <span className="text-blue pe-2">{number}. {"<"}</span>
        <span className="text-black dark:text-white">{text.toUpperCase()}</span>
        <span className="text-blue pe-2"> {"/>"}</span>
      </h2>
    </div>
  );
}

export default Title;
