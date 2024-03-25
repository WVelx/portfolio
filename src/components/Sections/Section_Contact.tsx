import Title from "../UI/Title";
import Section from "./Section";
import { Imput_Cntc } from "../Imputs/Imput";
import { TextArea_Ctnc } from "../Imputs/TextArea";
import { Btn_send } from "../Buttons/Elmnt_btn";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

import gif from "../../assets/extras/Programe.gif";

interface Props {
  classSection: string;
}

function Section_Contact({ classSection }: Props) {
  return (
    <Section id="Contact" classSection={classSection}>
      {Title({ number: 5, text: "Contacto" })}
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:p-2 pb-2">
          <div className=" border-0 rounded-md bg-lightBackground dark:bg-darkBackground">
            <p className="text-center py-5 font-bold text-xl text-black dark:text-white">
              {" "}
              ENVIA TU MENSAJE{" "}
            </p>
            <form>
              <Imput_Cntc
                type="text"
                placeholder="Nombre"
                id="name_user"
                name="name_user"
                size={50}
              ></Imput_Cntc>
              <Imput_Cntc
                type="text"
                placeholder="Correo"
                id="email_user"
                name="email_user"
                size={50}
              ></Imput_Cntc>
              <Imput_Cntc
                type="text"
                placeholder="Asunto"
                id="case_user"
                name="case_user"
                size={50}
              ></Imput_Cntc>
              <TextArea_Ctnc
                placeholder="Mensaje"
                id="msj_user"
                name="msj_user"
                rows={6}
              ></TextArea_Ctnc>
              <div className="py-3 text-center">
                <Btn_send />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center text-center text-lightTextnormal dark:text-darkTextnormal">
          <div className="rounded-md p-2 bg-lightBackground dark:bg-darkBackground">
            <img className="p-2" src={gif} alt="" />
            <div className="py-2">
              <div className="md:text-lg text-base flex items-center justify-center">
                <i className="mx-2 inline-block text-blue"><MdEmail /></i>
                christianacocar2001@gmail.com
              </div>
              <div className="md:text-lg text-base flex items-center justify-center">
                <i className="mx-2 inline-block text-blue">
                  <FaPhoneAlt />
                </i>
                +57 3133151739
              </div>
              <div className="md:text-lg text-base flex items-center justify-center">
                <i className="mx-2 inline-block text-blue">
                  <MdLocationPin />
                </i>
                Florencia - Colombia
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Contact;
