import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import LangSwitch from "./LangSwitch";

const Navbar = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation("navbar");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolledUp(currentScrollPos > 0 && currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const gradientConfig = {
    bg: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-300",
    text: "bg-gradient-to-r from-pink-400 to-orange-300 hover:text-transparent hover:bg-clip-text",
  };

  return (
    <nav
      className={`w-screen px-6 md:px-24 py-6 
      bg-gradient-to-b from-slate-900 to-slate-800 
      fixed top-0 z-50 transition duration-300 ease-in-out transform ${
        isScrolledUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <a href="#welcome" aria-label="Scroll to the welcome section">
          <div
            className={`w-1/2 md:w-full bg-mint md:hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-300 rounded-full`}
          >
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="rounded-full p-[2px]"
            />
          </div>
        </a>
        {/* sm Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className="text-mint  h-[20px]"
          />
        </button>

        {isMenuOpen && (
          <div
            className="transition ease-in-out transform scale-75 translate-y-16 delay-150 
           p-6 bg-slate-800 border-2 border-mint fixed top-0 left-56 text-right rounded-md md:hidden"
          >
            <ul className="flex flex-col justify-center items-center h-full space-y-8 text-2xl text-mint">
              <li>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Scroll to the About section"
                >
                  {t("about")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Scroll to the projects section"
                >
                  {t("projects")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Scroll to the contact section"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/files/RESUME_MERLE_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Download Antony Merle's resume"
                >
                  {t("resume")}
                </a>
              </li>
              <li>
                <LangSwitch />
              </li>
            </ul>
          </div>
        )}

        {/* md Menu */}
        <ul
          className={`hidden md:flex justify-between items-center space-x-6 text-md text-mint`}
        >
          <li className={`flex hover:${gradientConfig.text}`}>
            <a href="#about" aria-label="Scroll to the About section">
              {t("about")}
            </a>
          </li>
          <li className={`flex hover:${gradientConfig.text}`}>
            <a href="#projects" aria-label="Scroll to the projects section">
              {t("projects")}
            </a>
          </li>
          <li className={`flex hover:${gradientConfig.text}`}>
            <a href="#contact" aria-label="Scroll to the contact section">
              Contact
            </a>
          </li>
          <li className={`flex hover:${gradientConfig.text}`}>
            <a
              href={t("resume-link")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Antony Merle's resume"
            >
              {t("resume")}
            </a>
          </li>
          <li>|</li>
          <li>
            <LangSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
