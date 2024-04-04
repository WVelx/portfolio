import "./Buttons.css";
import { ReactNode } from "react";

interface Props {
  href?: string;
  click?: () => void;
  content: string;
  classPros: string;
  blank?: boolean;
  children: ReactNode;
}

export function Button_charge({ href, click, classPros, content, blank, children }: Props) {
  const target = blank ? "_blank" : "_self";

  return (
    <div className="z-10">
      <a
      onClick={click || undefined}
      href={href || undefined}
      className= {classPros}
      target={target} 
      rel={blank ? "noopener noreferrer" : undefined}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-lightBlue dark:bg-darkBlue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
      <span className="absolute left-0 flex items-center justify-end w-7 h-10 duration-500 transform -translate-x-full group-hover:translate-x-0 ease">
        {children}
      </span>
      <span className="relative">{content}</span>
    </a>
    </div>
  );
}
