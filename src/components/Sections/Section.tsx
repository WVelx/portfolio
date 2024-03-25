import { ReactNode } from "react";

interface Props {
  id: string;
  classSection: string;
  children: ReactNode;
}

function Section({ id, classSection, children }: Props) {
  return (
    <section className="relative" id={id}>
      <div className= {classSection}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
