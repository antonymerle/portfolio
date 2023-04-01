import Image from "next/image";
import logoFullSize from "../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-12 justify-center items-center h-[777px] text-slate-300">
      <Image
        src={logoFullSize}
        alt="logoFullSize"
        width={333}
        height={333}
        className="rounded-full md:transition-all md:hover:opacity-90 md:hover:rounded-full md:duration-500 ease-in-out border-4  border-mint"
      />
      <h6 className="text-2xl font- light">
        Antony Merle, {new Date().getFullYear()}
      </h6>

      <ul className="flex flex-row space-x-10">
        <a href="https://github.com/antonymerle" target="blank">
          <li className="border-2 border-slate-100 p-6 rounded-full transition-colors duration-300 ease-in hover:bg-slate-600">
            <FontAwesomeIcon icon={faGithubAlt} style={{ height: "33px" }} />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/antony-merle-25854042/"
          target="blank"
        >
          <li className="border-2 border-slate-100 p-6 rounded-full transition-colors duration-300 ease-in hover:bg-slate-600">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ height: "33px" }} />
          </li>
        </a>{" "}
        <a href="https://www.instagram.com/antonymerle/" target="blank">
          <li className="border-2 border-slate-100 p-6 rounded-full transition-colors duration-300 ease-in hover:bg-slate-600">
            <FontAwesomeIcon icon={faInstagram} style={{ height: "33px" }} />
          </li>
        </a>{" "}
        <a href="https://twitter.com/AntonyMerleDev" target="blank">
          <li className="border-2 border-slate-100 p-6 rounded-full transition-colors duration-300 ease-in hover:bg-slate-600 ">
            <FontAwesomeIcon icon={faTwitter} style={{ height: "33px" }} />
          </li>
        </a>
        <a href="mailto:antony.merle@gmail.com" target="blank">
          <li className="border-2 border-slate-100 p-6 rounded-full transition-colors duration-300 ease-in hover:bg-slate-600">
            <FontAwesomeIcon icon={faEnvelope} style={{ height: "33px" }} />
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
