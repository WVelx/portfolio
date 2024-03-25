import { FaLinkedin, FaGithub } from "react-icons/fa";

interface IconProps {
  href: string;
  socialNetwork: string;
}

export function Icon({ href, socialNetwork }: IconProps) {

  function getIcon(nameicon: string){
    switch(nameicon){
      case 'LinkedIn':
        return <FaLinkedin/>
      case 'GitHub':
        return <FaGithub/>
    }
  }

  return (
    <a href={href} target="_blank" className="mx-2 inline-block text-lightTexttitle hover:text-blue dark:text-darkTexttitle dark:hover:text-blue
    transition-all duration-500 transform hover:scale-125">
      {getIcon(socialNetwork)}
    </a>
  );
}

export default Icon;
