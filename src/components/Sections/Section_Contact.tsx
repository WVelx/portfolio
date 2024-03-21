import Title from "../UI/Title";
import Section from "./Section";
import { Imput_Cntc } from "../Imputs/Imput";
import { TextArea_Ctnc } from "../Imputs/TextArea";
import { Btn_send } from "../Buttons/Elmnt_btn";

import React from "react";

function Section_Contact() {
  return (
    <Section id="Contact">
        <div className="p-3">
        {Title({ number: 5, text: "Contacto" })}
        <div className="md:p-3 lg:mx-vw-15 md:mx-vw7">
          <div
            className=" border-0 rounded-md
              bg-graywhite dark:bg-darkgray_blue"
          >
            <p
              className="text-center py-5 font-bold text-xl 
                text-black dark:text-white"
            >
              ENVIA TU MENSAJE
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
                rows={10}
              ></TextArea_Ctnc>
              <div className="py-3 text-center">
                <Btn_send />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Section_Contact;
