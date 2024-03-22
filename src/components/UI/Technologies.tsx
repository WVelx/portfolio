import { ReactNode } from "react";

interface Props {
  technologie: string;
  children: ReactNode;
}

export function Technologies({technologie, children}:Props) {
  return (
    <div className="group inline-flex justify-center items-center border-2 rounded-md p-2 m-1
    border-black/15 dark:border-white/15">
        <div className="text-blue pe-1
        group-hover:scale-110 transition-transform duration-300
        lg:text-2xl
        md:text-xl
        text-base">
        {children}
        </div>
        <span className="italic 
        text-grayblack 
        dark:text-graywhite
        2xl:text-sm
        text-xs">{technologie}</span>
    </div>
  )
}

export default Technologies