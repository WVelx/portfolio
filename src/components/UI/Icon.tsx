import React, { ReactNode } from "react";
interface IconProps {
  href: string;
  children: ReactNode;
}

export function Icon({ href, children }: IconProps) {
  return (
    <a href={href} className="mx-2 inline-block text-3xl 
    text-black hover:text-blue
    dark:text-white dark:hover:text-blue
    transition-all duration-300 transform hover:scale-125">
      {children}
    </a>
  );
}

export default Icon;
