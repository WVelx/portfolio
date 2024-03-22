import { Icon } from "../UI/Icon";
import { Copyright } from "../UI/Copyright";
import { Line_gradient } from "../UI/Line";

import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="relative max-w z-30 text-center shadow-md
    lg:px-8 
    md:text-base
    text-sm
    "
    >
      <div className="container
      bg-white text-black
      dark:bg-darkblue dark:text-white">
        <div className="py-4">
          <Line_gradient />
        </div>
        <div
          className="mb-2 
      md:text-3xl
      text-2xl"
        >
          <Icon href="#">
            <FaLinkedin />
          </Icon>
          <Icon href="#">
            <FaGithub />
          </Icon>
          <Icon href="#">
            <FaWhatsapp />
          </Icon>
          <Icon href="#">
            <FaFacebook />
          </Icon>
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
