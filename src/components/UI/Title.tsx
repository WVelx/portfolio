
interface TitleProps {
  number: number;
  text: string;
}

export function Title({ number, text }: TitleProps) {
  return (
    <div className="mb-5 inline-block">
      <h2
        className=" pe-2 text-writer border-r-2 border-lightTexttitle dark:border-darkTexttitle
        relative font-bold
        2xl:text-3xl
        lg:text-2xl 
        md:text-xl
        text-lg"
        id={`title-${text.toLowerCase().replace(/\s/g, "-")}`}
      >
        <span className="text-lightBlue dark:text-darkBlue pe-2">{number}. {"<"}</span>
        <span className="text-black dark:text-white">{text.toUpperCase()}</span>
        <span className="text-lightBlue dark:text-darkBlue"> {"/>"}</span>
      </h2>
    </div>
  );
}

export default Title;
