import { FaAngleDoubleDown } from "react-icons/fa";

import { Button_charge } from "../Buttons/Elmnt_other";

interface CertificateProps {
  imageURL: string;
  nameCertificate: string;
  inforCertificate: string;
  linkCertificate: string;
}

export function Certificate({ imageURL, nameCertificate, inforCertificate, linkCertificate}: CertificateProps) {
  return (
    <div className="group rounded-md relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-black/30 transition-shadow">
      <div className="w-auto lg:h-96 md:h-72 h-60">
        <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageURL}/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black
    group-hover:from-black/55 group-hover:via-black/45 group-hover:to-black/55">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
          <h5 className="text-white font-bold lg:mb-3 lg:text-2xl md:mb-2 md:text-xl sm:mb-1 sm:text-lg mb-1 text-lg">
            {nameCertificate.toUpperCase()}
          </h5>
          <p className="text-wrap italic text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500
          md:text-base mb-4 text-xs">
            {inforCertificate}
          </p>
          <Button_charge href= {linkCertificate} content="Descargar"
          classPros="group relative inline-flex items-center py-2 overflow-hidden border-2 rounded-md
          bg-white text-white border-white hover:text-white hover:bg-blue md:px-10 md:text-base px-8 text-xs"
          blank={true}>
            <FaAngleDoubleDown />
          </Button_charge>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
