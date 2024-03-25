import Title from "../UI/Title";
import Section from "./Section";

import { Technologies } from "../UI/Technologies";
import Project from "../UI/Project";

import jsonProject from "../../assets/projects/Projects";

interface Props {
  classSection: string;
}

function Section_Portfolio({classSection}:Props) {
  return (
    <Section id="Portfolio" classSection={classSection}>
      {Title({ number: 4, text: "Portafolio" })}
        <div className="p-3">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
            {jsonProject.map((project) => (
              <Project href={project.link}
              imageURL={project.image}
              nameProject={project.project}
              descrProject={project.content}
              >
                {project.tecnologies.map ((tecnologie) => (
                  <Technologies technologie={tecnologie}/>
                ))}
              </Project>
            ))}
          </div>
        </div>
    </Section>
  );
}

export default Section_Portfolio;
