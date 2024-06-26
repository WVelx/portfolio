import { ReactNode } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  href: string;
  imageURL: string;
  nameProject: string;
  descrProject: string;
  children: ReactNode;
}

export function Project({ href, imageURL, nameProject, descrProject, children}: Props) {
  return (
    <div className="border-2 border-lightContent_1 dark:border-darkContent_1 
    border-t-4 border-t-lightTexttitle dark:border-t-darkTexttitle 
    hover:border-t-lightBlue dark:hover:border-t-darkBlue transition-colors duration-500
    rounded-md relative items-center justify-center bg-lightBackground dark:bg-darkBackground">
      <div className="group w-auto relative cursor-pointer p-2 hover:shadow-black/30 transition-shadow lg:h-60 md:h-52 h-44">
        <img className="group-hover:scale-105 transition-transform duration-500  h-full w-full rounded-md object-cover" src={imageURL}/>
        <div className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent via-transparent to-transpblack/5 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50">
          <a href={href} target="_blank" className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
            <FaExternalLinkAlt className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:text-xl text-lg"/>
          </a>
        </div>
      </div>
      <div className="relative p-1">
        <h5 className="text-center p-2 font-bold text-lightTexttitle dark:text-darkTexttitle md:text-lg text-base">
          {nameProject.toUpperCase()}
        </h5>
        <div className="justify-center items-stretch text-center">
          {children}
        </div>
        <div>
          <p className="p-3 text-lightTextnormal dark:text-darkTextnormal md:text-sm text-xs"
          >
            {descrProject}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
