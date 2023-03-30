import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";

const Navbar = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
      className={`w-full px-64 py-6 bg-gradient-to-b from-slate-900 to-slate-800 
      fixed top-0 z-50 transition duration-300 ease-in-out transform ${
        isScrolledUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex items-center justify-between">
        <a href="#welcome">
          <div className={`bg-mint rounded-full ${gradientConfig.bg}`}>
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="rounded-full p-[2px]"
            />
          </div>
        </a>
        {/* Menu items */}
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
      </nav>
    </nav>
  );
};

export default Navbar;
