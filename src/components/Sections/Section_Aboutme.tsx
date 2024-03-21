import Title from "../UI/Title";
import Section from "./Section";

import React from "react";

function Section_Aboutme() {
  return (
    <Section id="About-me">
      <div className="p-3">
        {Title({ number: 1, text: "Sobre mi" })}
        <div className="p-3">
          <div className="grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center"></div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Aboutme;
