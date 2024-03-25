import Title from "../UI/Title";
import Section from "./Section";

interface Props {
  classSection: string;
}

function Section_Aboutme({ classSection }: Props) {
  return (
    <Section id="About-me" classSection={classSection}>
      {Title({ number: 1, text: "Sobre mi" })}
      <div className="p-3">
        <div className="grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center"></div>
      </div>
    </Section>
  );
}

export default Section_Aboutme;
