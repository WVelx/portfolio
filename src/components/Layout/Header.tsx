import { useEffect, useState } from "react";

// Import Icons
import { FaMoon, FaSun } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseOutline} from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { RiUserSettingsFill } from "react-icons/ri";
import { SiFiles } from "react-icons/si";

// Import Extras
import clsx from "clsx";
import logo from "../../assets/extras/Logo.png";

// Const or Var
const linksnav = [
    {
      icon: <IoPerson />,
      label: "Sobre mi",
      link: "#About-me",
    },
    {
      icon: <RiUserSettingsFill />,
      label: "Habilidades",
      link: "#Skills",
    },
    {
      icon: <PiCertificateFill />,
      label: "Certificates",
      link: "#Certificates",
    },
    {
      icon: <SiFiles />,
      label: "Portafolio",
      link: "#Portfolio",
    },
];

// Component
function Header() {
  const [isSun, setIsSun] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setIsSun(!isSun);
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setIsSun(!isSun);
  };

  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <nav className="fixed w-full z-30 shadow-sm bg-lightBackground/90 text-lightTexttitle shadow-lightTexttitle/20
    dark:bg-darkBackground/90 dark:text-darkTexttitle dark:shadow-darkTexttitle/20">
      <div className="xl:container relative flex h-16 items-center justify-between  md:px-6">
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
          <BiMenuAltLeft onClick={() => setMenu(true)} className="text-3xl cursor-pointer mx-4 md:hidden"/>
        </div>
        <div className="flex flex-grow items-center justify-center md:items-stretch md:justify-start">
          <a className="flex flex-shrink-0 items-center font-bold hover:scale-105 transition-all duration-300 md:ps-0 ps-6 md:text-lg text-base" href="#Home">
            <img className="w-100 h-10 pe-2" src={logo} alt="" />
            <span>{"<"} CHRISTIAN </span>
            <span className="text-lightBlue dark:text-darkBlue ps-1"> ACOSTA {"/>"}</span>
          </a>

          <div className="hidden md:ml-auto md:block">
            <div className="flex space-x-4 lg:text-lg text-base">

              {linksnav.map((linksnav) => (
                <a href={linksnav.link}
                className="py-2 relative group text-lightTextnormal hover:text-lightBlue dark:text-darkTextnormal dark:hover:text-darkBlue
                line-bottom after:bg-lightBlue dark:after:bg-darkBlue">
                  {linksnav.label}
                </a>
              ))}

              <button onClick={handleChangeTheme} className="px-2 rounded-md hover:bg-lightContent_1 hover:dark:bg-darkContent_1 text-lightTextnormal hover:text-lightBlue
            dark:text-darkTextnormal dark:hover:text-darkBlue transition-all duration-500 transform hover:scale-110">
                {isSun ? <FaSun /> : <FaMoon />}
              </button>

            </div>
          </div>
        </div>
      </div>


      <div className={clsx( "fixed h-full w-screen md:hidden top-0 right-0 -translate-x-full transition-all", isSideMenuOpen && "translate-x-0 z-50")}>
        <div className="flex-col absolute left-0 top-0 h-screen p-8 gap-4 w-full flex bg-lightBackground dark:bg-darkBackground" >
          <div className="items-end justify-end text-end">
            <IoCloseOutline onClick={() => setMenu(false)} className="inline-flex mt-0 text-3xl cursor-pointer text-lightTexttitle dark:text-darkTexttitle"/>
          </div>
          <a href="#Home" className="items-center justify-center text-center text-lightTexttitle dark:text-darkTexttitle">
            <img className="inline-flex w-100 h-20" src={logo} alt="" />
            <div className="pt-2 text-lg font-bold">
              <span>{"<"}CHRISTIAN </span>
              <span className="text-lightBlue dark:text-darkBlue ps-1"> ACOSTA{"/>"}</span>
            </div>
          </a>

          {linksnav.map((linksnav) => (
            <a className="group flex items-center font-bold p-3 rounded-md hover:bg-lightContent_1 text-lightTextnormal dark:hover:bg-darkContent_1 dark:text-darkTextnormal"
            href={linksnav.link}>
              <div className="group-hover:scale-110 transform duration-500 text-xl group-hover:text-lightBlue dark:group-hover:text-darkBlue">
                {linksnav.icon}
              </div>
              <span className="ps-3">{linksnav.label}</span>
            </a>
          ))}

          <a onClick={handleChangeTheme} className="group flex items-center font-bold p-3 rounded-md hover:bg-lightContent_1 text-lightTextnormal dark:hover:bg-darkContent_1 dark:text-darkTextnormal">
            <div className="group-hover:scale-110 transform duration-500 text-xl  group-hover:text-lightBlue dark:group-hover:text-darkBlue">
              {isSun ? <FaSun /> : <FaMoon />}
            </div>
            <span className="ps-3">Modo</span>
          </a>
        </div> 
      </div>


    </nav>
  );
}

export default Header;
