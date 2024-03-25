import { FaAngleDoubleDown } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

import Icon from "../UI/Icon";
import TSParticles from "../Particles/TSParticles";
import { Button_charge } from "../Buttons/Elmnt_other";
import { Line_gradient } from "../UI/Line";

import fotoPerfil from "../../assets/extras/Perfil.jpeg";
import socialNetworks from "../../assets/json/Socials.json";

function Section_Home() {
  const linkCV =
    "https://drive.google.com/uc?export=dowload&id=1eGTBGHA_TqHG-VF3MEU0hAL1dQDpAKlT";

  return (
    <section
      id="Home"
      className="scroll-mt-16 w-full relative align-middle
      2xl:min-h-full
      min-h-screen"
    >
      <TSParticles />
      <div className="container grid relative items-center justify-center mx-auto 2xl:py-vh-15 md:grid-cols-3 md:pt-vh-30 grid-cols-1 pt-vh-20">
        <div className="flex justify-center items-center md:pb-0 pb-7">
          <img
            className="object-cover lg:h-72 md:h-64 h-40"
            src={fotoPerfil}
          />
        </div>
        <div className="md:col-span-2 flex flex-col">
          <div className="bg-white dark:bg-darkblue">
            <h1
              className="italic
              text-lightTextnormal dark:text-darkTextnormal
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
            <div
              className="text-center 
            md:py-4 md:text-3xl
            py-3 text-2xl"
            >
              {socialNetworks.map((social) => (
                <Icon href={social.link} socialNetwork={social.social}></Icon>
              ))}
            </div>
            <div
              className="grid gap-2 justify-center text-center 
              lg:text-base
              md:grid-cols-2 
              grid-cols-1 text-sm"
            >
              <Button_charge
                href={linkCV}
                content="Descargar CV"
                classPros="group relative inline-flex items-center py-2 overflow-hidden border-2 rounded-md
                bg-white text-black border-black 
                dark:bg-darkblue dark:text-white dark:border-white
                hover:text-white hover:bg-blue
                lg:px-10
                px-9"
                blank={true}
              >
                <FaAngleDoubleDown />
              </Button_charge>
              <Button_charge
                href="#Contact"
                content="Contactame"
                classPros="group relative inline-flex items-center py-2 overflow-hidden border-2 rounded-md
                bg-white text-black border-black 
                dark:bg-darkblue dark:text-white dark:border-white
                hover:text-white hover:bg-blue
                lg:px-10
                px-9"
              >
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
