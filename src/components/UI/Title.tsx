
interface TitleProps {
  number: number;
  text: string;
}

export function Title({ number, text }: TitleProps) {
  return (
    <div className="mb-5">
      <h2
        className="relative font-bold
        lg:text-2xl 
        md:text-xl
        sm:text-lg
        text-base"
        id={`title-${text.toLowerCase().replace(/\s/g, "-")}`}
      >
        <span className="text-blue pe-2">{number}. {"<"}</span>
        <span className="text-black dark:text-white">{text.toUpperCase()}</span>
        <span className="text-blue pe-2"> {"/>"}</span>
      </h2>
    </div>
  );
}

export default Title;
