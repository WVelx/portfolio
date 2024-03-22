import { ReactNode } from "react";

interface Props {
  imageURL: string;
  nameProject: string;
  descrProject: string;
  children: ReactNode;
}

export function Project({imageURL, nameProject, descrProject, children}: Props) {
  return (
    <div className="border-2 rounded-md relative items-center justify-center overflow-hidden
    border-black/10
    dark:border-white/10">
        <div className="w-auto lg:h-60 h-52 p-5">
            <img className="h-full w-full rounded-md object-cover" src={imageURL}
            />
        </div>
        <div className="p-1">
          <h5 className="text-center pb-3
        text-black dark:text-white font-bold md:text-xl sm:text-lg">{nameProject}</h5>
          <div className="justify-center items-stretch text-center">
            {children}
          </div>
          <div>
            <p className="px-1 py-2
            text-grayblack dark:text-graywhite md:text-base sm:text-sm">
              {descrProject}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Project;