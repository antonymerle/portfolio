import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`w-full pl-6 pr-36 md:px-24 py-6 
      bg-gradient-to-b from-slate-900 to-slate-800 
      fixed top-0 z-50 transition duration-300 ease-in-out transform ${
        isScrolledUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="#welcome">
          <div
            className={`w-1/2 md:w-full bg-mint rounded-full md:${gradientConfig.bg}`}
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
            <ol className="flex flex-col justify-center items-center h-full space-y-8 text-2xl text-mint">
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/files/RESUME_MERLE_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ol>
          </div>
        )}

        {/* md Menu */}
        <ol
          className={`hidden md:flex justify-between items-center space-x-6 text-md text-mint`}
        >
          <li className={`flex hover:${gradientConfig.text}`}>
            <a href="#about">About</a>
          </li>
          <li className={`flex hover:${gradientConfig.text}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`flex hover:${gradientConfig.text}`}>
            <a href="#contact">Contact</a>
          </li>
          <li className={`flex hover:${gradientConfig.text}`}>
            <a
              href="/files/RESUME_MERLE_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
