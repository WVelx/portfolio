import React, { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

import logo from "../../assets/logo.png";

function Header() {
  //MODO DARK
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

  const navlinks = [
    {
      labe: "Sobre mi",
      link: "#About-me",
    },
    {
      labe: "Habilidades",
      link: "#Skills",
    },
    {
      labe: "Certificates",
      link: "#Certificates",
    },
    {
      labe: "Portafolio",
      link: "#Portfolio",
    },
  ];

  return (
    <nav className="fixed w-full lg:px-8 z-30">
      <div
        className="relative lg:container md:px-6 flex h-16 items-center justify-between
        shadow-md 
       bg-white text-black shadow-transpblack
       dark:bg-darkblue dark:text-white dark:shadow-transpwhite"
      >
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
          <BiMenuAltLeft
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer mx-4 lg:hidden"
          />
        </div>
        <div className="flex flex-grow items-center justify-center md:items-stretch md:justify-start">
          <a
            className="flex flex-shrink-0 items-center font-bold
            hover:scale-105 transition-all duration-300"
            href="#Home"
          >
            <img className="w-100 h-10 pe-2" src={logo} alt="" />
            <span>{"<"}CHRISTIAN </span>
            <span className="text-blue ps-1"> ACOSTA{"/>"}</span>
          </a>
          <div className="hidden md:ml-auto md:block">
            <div className="flex space-x-4">
              {navlinks.map((d, i) => (
                <a
                  key={i}
                  href={d.link}
                  className="mx-2 py-2 relative group line-bottom
                  text-grayblack hover:text-blue
                  dark:text-graywhite dark:hover:text-blue"
                >
                  {d.labe}
                </a>
              ))}
              <button
                onClick={handleChangeTheme}
                className="text-xl text-black hover:text-blue
              dark:text-white dark:hover:text-blue
                transition-all duration-300 transform hover:scale-125"
              >
                {isSun ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "fixed h-full w-screen md:hidden top-0 right-0 -translate-x-full transition-all",
          isSideMenuOpen && "translate-x-0 z-50"
        )}
      >
        <div className="flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-full flex
        bg-white text-black
        dark:bg-darkblue dark:text-white">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />

          {navlinks.map((d, i) => (
            <a key={i} className="font-bold" href={d.link}>
              {d.labe}
            </a>
          ))}
          <button onClick={handleChangeTheme} className="text-xl icon">
            {isSun ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
