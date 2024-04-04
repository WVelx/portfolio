import Title from "../UI/Title";
import Section from "./Section";
import Certificate from "../UI/Certificate";

import jsonCertificates from "../../assets/certificates/Certificates";

interface Props {
  classSection: string;
}

function Section_Certificate({ classSection }: Props) {
  return (
    <Section id="Certificates" classSection={classSection}>
      {Title({ number: 3, text: "Certificado" })}
      <div className="p-3">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center">
          {jsonCertificates.map((certificate) => (
            <Certificate linkCertificate={certificate.link} imageURL={certificate.image} nameCertificate={certificate.certificate}
            inforCertificate={certificate.content}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Section_Certificate;
