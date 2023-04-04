import Image from "next/image";
import logoFullSize from "../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const iconClass =
  "md:border-2 md:border-slate-300 p-2 md:p-6 md:rounded-full md:transition-colors md:duration-300 md:ease-in md:hover:bg-mint md:hover:text-slate-700";

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
      <h3 className="flex items-center text-base md:text-lg font-light tracking-widest">
        Réalisé par Antony Merle, {new Date().getFullYear()}
        <a
          href="https://github.com/antonymerle/portfolio"
          target="_blank"
          aria-label="Antony Merle's portfolio repository"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faCodeBranch}
            style={{ height: "16px" }}
            className="pl-2 hover:text-mint"
          />
        </a>
      </h3>

      <ul className="flex flex-row space-x-6 md:space-x-10">
        <li>
          <a
            href="https://github.com/antonymerle"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Antony Merle's Github profile"
          >
            <div className={iconClass}>
              <FontAwesomeIcon icon={faGithubAlt} style={{ height: "33px" }} />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/antony-merle-25854042/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Antony Merle's LinkedIn profile"
          >
            <div className={iconClass}>
              <FontAwesomeIcon icon={faLinkedinIn} style={{ height: "33px" }} />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/antonymerle/"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Antony Merle's Instagram profile"
          >
            <div className={iconClass}>
              <FontAwesomeIcon icon={faInstagram} style={{ height: "33px" }} />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/AntonyMerleDev"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Antony Merle's Twitter profile"
          >
            <div className={iconClass}>
              <FontAwesomeIcon icon={faTwitter} style={{ height: "33px" }} />
            </div>
          </a>
        </li>

        <li>
          <a
            href="mailto:antony.merle@gmail.com"
            target="blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Antony Merle"
          >
            <div className={iconClass}>
              <FontAwesomeIcon icon={faEnvelope} style={{ height: "33px" }} />
            </div>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
