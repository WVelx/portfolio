interface Props {
  technologie: string;
}

import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

export function Technologies({technologie}:Props) {

  function getIcon(nameicon: string){
    switch(nameicon){
      case 'Tailwindcss':
        return <SiTailwindcss/>
      case 'TypeScript':
        return <SiTypescript/>
      case 'MongoDB':
          return <SiMongodb/>
      case 'React':
        return <FaReact/>
    }
  }

  return (
    <div className="group border-0 border-l-2 inline-flex justify-center items-center rounded-md p-2 m-1
    bg-lightContent_1 border-lightTexttitle hover:border-lightBlue
    dark:bg-darkContent_1 dark:border-darkTexttitle dark:hover:border-darkBlue
    transition-all duration-500">
        <div className="text-lightBlue dark:text-darkBlue pe-1 group-hover:scale-110 transition-transform duration-300 lg:text-xl md:text-base text-sm">
        {getIcon(technologie)}
        </div>
        <span className="italic text-lightTextnormal dark:text-darkTextnormal lg:text-sm text-xs">{technologie}</span>
    </div>
  )
}

export default Technologies