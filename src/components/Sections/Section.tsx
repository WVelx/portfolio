import { ReactNode } from "react";

interface Props {
    id: string,
    children: ReactNode,
}

function Section({ id, children }: Props) {
  return (
    <section
      className="relative md:px-vw-7 sm:px-2
        bg-white
        dark:bg-darkblue"
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
