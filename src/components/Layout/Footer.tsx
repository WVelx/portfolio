import { Icon } from "../UI/Icon";
import { Line_gradient } from "../UI/Line";

import socialNetworks from "../../assets/json/Socials.json";

function Footer() {
  return (
    <footer className="relative z-30 text-center md:text-base text-sm">
      <div className="2xl:container p-4 shadow-sm shadow-lightTexttitle/10 dark:shadow-darkTexttitle/10 bg-lightBackground text-lightTexttitle dark:bg-darkBackground dark:text-darkTexttitle">
          <Line_gradient />
        <div className="pt-3 pb-1 md:text-3xl text-2xl">
          {socialNetworks.map(social =>(
            <Icon href={social.link} socialNetwork={social.social}></Icon>
          ))}
        </div>
        <p className="text-lightTextnormal dark:text-darkTextnormal">
          Todos los derechos reservados <br/>
          <strong className="text-black dark:text-white">Christian Acosta</strong>
          <br/> © Copyright 2024.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
