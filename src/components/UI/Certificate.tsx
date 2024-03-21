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
    <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-black/30 transition-shadow">
      <div className="w-auto lg:h-96 h-72">
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
          <h4 className="text-white text-xl font-bold mb-2">{nameCertificate}</h4>
          <p className="italic text-graywhite my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500
          text-xs">{inforCertificate}</p>
          <button className="rounded-full bg-blue py-2 px-3.5 text-sm capitalize text-white">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;

/*
<div className='border p-2
    border-black bg-graywhite
    dark:border-white dark:bg-grayblue'>
      <div className='p-4
      hover:scale-105 transition-transform duration-300'>
        <img className='' src={imageURL}></img>
      </div>
    </div>
*/
