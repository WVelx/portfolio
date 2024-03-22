import Title from "../UI/Title";
import Section from "./Section";

function Section_Skills() {
  return (
    <Section id="Skills">
      <div className="container 
      xl:py-4 xl:px-7
      p-5
      bg-white
      dark:bg-darkblue">
        {Title({ number: 2, text: "Habilidades" })}
        <div className="p-3">
          <div className="grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center"></div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Skills;
