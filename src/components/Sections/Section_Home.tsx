import { FaLinkedin, FaGithub, FaWhatsapp, FaAngleDoubleDown } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

import Icon from "../UI/Icon";
import TSParticles from "../Particles/TSParticles";
import { Button_charge } from "../Buttons/Elmnt_other";
import { Line_gradient } from "../UI/Line";

import React from "react";

function Section_Home() {
  return (
    <section
     id="Home"
     className="scroll-mt-16 min-h-screen w-full relative align-middle">
      <TSParticles />
      <div className="container grid md:grid-cols-2 sm:grid-cols-1 relative items-center justify-center mx-auto pt-vh-25">
        <div className="flex justify-center items-center md:pe-5">
          <img className="" src="../src/assets/perfil.jpeg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1
              className="lg:text-xl md:text-base italic
              text-black dark:text-white mb-2"
            >
              <span>{"<"} CHRISTIAN</span>
              <span className="text-blue"> ACOSTA {"/>"}</span>
            </h1>
            <p
              className="mb-2 lg:text-4xl md:text-xl font-bold
              text-black dark:text-white"
            >
              DESARROLLADOR WEB.
            </p>
          </div>
          <Line_gradient />
          <div>
            <div className="text-center py-3">
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
            <div className="flex justify-center items-center text-center grid md:grid-cols-2 sm:grid-cols-1">
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
