interface CertificateProps {
  imageURL: string;
  nameCertificate: string;
  inforCertificate: string;
}

export function Certificate({
  imageURL,
  nameCertificate,
  inforCertificate,
}: CertificateProps) {
  return (
    <div className="group rounded-md relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-black/30 transition-shadow">
      <div className="w-auto 
      lg:h-96 
      h-72">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imageURL}
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black
      group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
          <h5 className="text-white font-bold 
          lg:mb-3 lg:text-2xl
          md:mb-2 md:text-xl
          sm:mb-1 sm:text-lg
          mb-1 text-lg">
            {nameCertificate}
          </h5>
          <p
            className="italic text-graywhite opacity-0 group-hover:opacity-100 transition-opacity duration-500
          md:my-4 md:text-base
          sm:my-2 sm:text-xs
          my-2 text-xs">
            {inforCertificate}
          </p>
          <button className="rounded-full bg-blue py-1.5 px-3.5 capitalize text-white
          lg:mt-3 lg:text-base
          md:mt-2 md:text-sm 
          sm:mt-1 sm:text-xs 
          mt-1 text-xs">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
