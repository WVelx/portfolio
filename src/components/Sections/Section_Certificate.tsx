import Title from "../UI/Title";
import Section from "./Section";
import Certificate from "../UI/Certificate";

function Section_Certificate() {
  return (
    <Section id="Certificates">
      <div className="p-3">
        {Title({ number: 3, text: "Certificado" })}
        <div className="p-3">
          <div className="grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center">
            <Certificate
              imageURL="../src/assets/Fondo_Inicial.jpg"
              nameCertificate="MongoDB"
              inforCertificate="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a libero ut felis tristique tristique. Nullam massa urna, fermentum et pellentesque in, tincidunt sed orci."
            />
            <Certificate
              imageURL="../src/assets/Fondo_Inicial.jpg"
              nameCertificate="MongoDB"
              inforCertificate="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a libero ut felis tristique tristique. Nullam massa urna, fermentum et pellentesque in, tincidunt sed orci."
            />
            <Certificate
              imageURL="../src/assets/Fondo_Inicial.jpg"
              nameCertificate="MongoDB"
              inforCertificate="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a libero ut felis tristique tristique. Nullam massa urna, fermentum et pellentesque in, tincidunt sed orci."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Certificate;
