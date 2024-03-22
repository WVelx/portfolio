import "./Buttons.css";
import { ReactNode } from "react";

interface OthersButtons {
  href: string;
  content: string;
  children: ReactNode;
}

export function Button_charge({ href, content, children }: OthersButtons) {
  return (
    <div className="z-10">
      <a
      href={href}
      className="group relative inline-flex items-center py-2 overflow-hidden border-2 rounded-md
      bg-white text-black border-black 
      dark:bg-darkblue dark:*:text-white dark:border-white
      hover:text-white hover:bg-blue
      lg:px-10
      px-9"
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-7 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
        {children}
      </span>
      <span className="relative">{content}</span>
    </a>
    </div>
  );
}
