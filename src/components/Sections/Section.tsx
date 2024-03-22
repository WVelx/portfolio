import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
}

function Section({ id, children }: Props) {
  return (
    <section
      className="relative lg:px-8 "
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
