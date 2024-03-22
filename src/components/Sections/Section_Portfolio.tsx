import Title from "../UI/Title";
import Section from "./Section";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

import { Technologies } from "../UI/Technologies";
import Project from "../UI/Project";

function Section_Portfolio() {
  return (
    <Section id="Portfolio">
      <div className="container 
      xl:py-4 xl:px-7
      p-5
      bg-white
      dark:bg-darkblue">
        {Title({ number: 4, text: "Portafolio" })}
        <div className="p-3">
          <div className="grid lg:grid-cols- lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center">
            <Project
              imageURL="/src/assets/Fondo_Inicial.jpg"
              nameProject="Proyecto de Pasatiempo"
              descrProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tortor magna, in imperdiet nunc molestie sed."
            >
              <Technologies technologie="React">
                <FaReact />
              </Technologies>
              <Technologies technologie="TailwindCSS">
                <SiTailwindcss />
              </Technologies>
              <Technologies technologie="TypeScript">
                <SiTypescript />
              </Technologies>
              <Technologies technologie="MoongoDB">
                <SiMongodb />
              </Technologies>
            </Project>
            <Project
              imageURL="/src/assets/Fondo_Inicial.jpg"
              nameProject="Proyecto de Pasatiempo"
              descrProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tortor magna, in imperdiet nunc molestie sed."
            >
              <Technologies technologie="React">
                <FaReact />
              </Technologies>
              <Technologies technologie="TailwindCSS">
                <SiTailwindcss />
              </Technologies>
              <Technologies technologie="TypeScript">
                <SiTypescript />
              </Technologies>
              <Technologies technologie="MoongoDB">
                <SiMongodb />
              </Technologies>
            </Project>
            <Project
              imageURL="/src/assets/Fondo_Inicial.jpg"
              nameProject="Proyecto de Pasatiempo"
              descrProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tortor magna, in imperdiet nunc molestie sed."
            >
              <Technologies technologie="React">
                <FaReact />
              </Technologies>
              <Technologies technologie="TailwindCSS">
                <SiTailwindcss />
              </Technologies>
              <Technologies technologie="TypeScript">
                <SiTypescript />
              </Technologies>
              <Technologies technologie="MoongoDB">
                <SiMongodb />
              </Technologies>
            </Project>
            <Project
              imageURL="/src/assets/Fondo_Inicial.jpg"
              nameProject="Proyecto de Pasatiempo"
              descrProject="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tortor magna, in imperdiet nunc molestie sed."
            >
              <Technologies technologie="React">
                <FaReact />
              </Technologies>
              <Technologies technologie="TailwindCSS">
                <SiTailwindcss />
              </Technologies>
              <Technologies technologie="TypeScript">
                <SiTypescript />
              </Technologies>
              <Technologies technologie="MoongoDB">
                <SiMongodb />
              </Technologies>
            </Project>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Portfolio;
