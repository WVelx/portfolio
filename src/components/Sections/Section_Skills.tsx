import Title from "../UI/Title";
import Section from "./Section";

import React from "react";

function Section_Skills() {
  return (
    <Section id="Skills">
      <div className="p-3">
        {Title({ number: 2, text: "Habilidades" })}
        <div className="p-3">
          <div className="grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center"></div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Skills;
