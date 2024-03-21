import Title from "../UI/Title";
import Section from "./Section";

function Section_Portfolio() {
  return (
    <Section id="Portfolio">
        <div className="p-3">
        {Title({ number: 4, text: "Portafolio" })}
        <div className="p-3">
          <div className="grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center"></div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Portfolio;
