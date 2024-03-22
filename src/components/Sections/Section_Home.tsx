import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaAngleDoubleDown,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

import Icon from "../UI/Icon";
import TSParticles from "../Particles/TSParticles";
import { Button_charge } from "../Buttons/Elmnt_other";
import { Line_gradient } from "../UI/Line";


function Section_Home() {
  return (
    <section
      id="Home"
      className="scroll-mt-16 w-full relative align-middle
      2xl:min-h-full
      min-h-screen"
    >
      <TSParticles />
      <div className="container grid relative items-center justify-center mx-auto
      2xl:py-vh-15
      md:grid-cols-2 md:pt-vh-30
      grid-cols-1 pt-vh-20">
        <div className="flex justify-center items-center 
        md:pb-0
        pb-7">
          <img className="object-cover
          lg:h-72
          md:h-64
          h-40" src="../src/assets/perfil.jpeg" />
        </div>
        <div className="flex flex-col">
          <div
            className="bg-white
          dark:bg-darkblue"
          >
            <h1
              className="italic font-bold
              text-black dark:text-white
              lg:text-xl 
              md:text-lg md:mb-2 md:text-start
              text-base mb-1 text-center"
            >
              <span>{"<"} CHRISTIAN</span>
              <span className="text-blue"> ACOSTA {"/>"}</span>
            </h1>
            <p
              className="font-extrabold
              text-black dark:text-white
              lg:text-4xl 
              md:text-2xl md:mb-2 md:text-start
              text-xl mb-1 text-center"
            >
              DESARROLLADOR WEB
            </p>
          </div>
          <Line_gradient />
          <div>
            <div className="text-center 
            md:py-4 md:text-3xl
            py-3 text-2xl">
              <Icon href="#">
                <FaLinkedin />
              </Icon>
              <Icon href="#">
                <FaGithub />
              </Icon>
              <Icon href="#">
                <FaWhatsapp />
              </Icon>
            </div>
            <div className="justify-center items-center text-center grid gap-2 
            md:grid-cols-2 
            grid-cols-1 
            lg:text-base
            text-sm">
              <Button_charge href="#" content="Descargar CV">
                <FaAngleDoubleDown />
              </Button_charge>
              <Button_charge href="#Contact" content="Contactame">
                <MdContactMail />
              </Button_charge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_Home;
