import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faRightFromBracket,
  faEnvelope,
  faChartColumn,
  faLineChart,
  faWater,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import jellyfish from "../public/jellyfish.png";
import istexUPPA from "../public/istex-uppa.jpg";
import istexUPPA2 from "../public/istex-uppa2.jpg";
import kanban from "../public/kanban.jpg";
import wordle from "../public/wordle.jpg";
import logoFullSize from "../public/logo.png";
import pp from "../public/antony-merle.jpg";
import Link from "next/link";

import { useEffect, useRef } from "react";
import CallToAction from "@/components/CallToAction";
import Button from "@/components/Button";
import Graph from "@/components/Graph";
import Project from "@/components/Project";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const plusBullet = (
    <FontAwesomeIcon icon={faPlus} style={{ height: "10px" }} />
  );

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-up-center");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current as any);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-slate-800 font-sans w-full">
      <Head>
        <title>Antony Merle</title>
        <meta
          name="description"
          content="Antony Merle fullstack developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        {/* ABOUT */}
        <section
          id="about"
          className="h-max md:h-screen w-full pt-44  px-6 bg-slate-50"
        >
          <div
            id="about-container"
            className="h-4/5 max-w-[900px] mx-auto px-12 pt-24 bg-slate-100 "
          >
            <div
              id="about-header"
              className="w-full flex flex-row justify-center items-center md:justify-start text-slate-700"
            >
              <h2 className="space-x-2  text-xl font-bold pb-6  md:text-4xl">
                <span className="text-lg text-mint">01.</span>
                <span>About me</span>
              </h2>
            </div>

            <div
              id="about-inner"
              className="flex flex-col container md:h-auto md:grid md:gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2"
            >
              <div id="about-text" className="text-center md:text-left">
                <p className="pb-6">
                  I live in the Basque Country, southwest of France. I am a
                  father of three. Since the beginning of my programming journey
                  in 2017, I worked for the public sector, as head of IT for the
                  University of Pau libraries. I specialized in the MERN stack
                  to build applications everybody could share and use in their
                  browser. I learned the JavaScript, specifically the MERN stack
                  and I used that knowledge to build online apps to provide
                  business intelligence, automatize repetitive task, help
                  student to get online services, etc. In 2023, I gratuaded at
                  La Capsule bootcamp, worked on board.lease, a peer to peer
                  surfoard renting mobile-first website. I am currently open to
                  work. Here are some details about my stack :
                </p>
                {/* bloc compétences */}
                <ul className="grid grid-cols-2 grid-rows-3 flex-wrap h-20 my-4 text-sm">
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>JavaScript
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>TypeScript
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>NodeJS
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>Express
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>NextJS
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>React Native
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>MongoDB
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>mySQL
                  </li>
                </ul>
              </div>
              {/* bloc image */}
              <div className="block container  md:flex-row md:justify-start md:items-center ">
                <div id="about-picture" className="relative">
                  <div className=" block mx-auto my-10 shadow-[10px_10px_#72ECCE] object-cover h-[250px] w-[250px] bg-slate-300 md:my-0 md:z-10 md:absolute md:shadow-none">
                    <Image
                      src={pp}
                      alt="antony merle picture"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="hidden top-[20px] left-[20px] h-[250px] w-[250px] border-solid border-2  border-slate-800 md:block md:z-0 md:absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PROJETS */}
        <section
          id="projects"
          className="h-max flex w-3/4 flex-col justify-start space-y-4 mb-48 pt-24 px-6  bg-slate-800 text-center text-slate-300  md:px-24 md:text-left lg:px-32"
        >
          <div
            id="projects-container"
            className="flex flex-col items-start h-full w-full max-w-[900px]"
          >
            <div
              id="projects-header"
              className="w-full flex flex-row justify-center items-center md:justify-start"
            >
              <h2 className="space-x-2 py-6 text-xl font-bold  md:text-4xl">
                <span className="text-lg text-mint">02.</span>
                <span>Projects I built</span>
              </h2>
            </div>
            <ul className="space-y-44">
              <Project
                title="ISTEX-UPPA"
                description=" A search engine frontend to the ISTEX database : explore
                    scientific, technical and medical research through 27
                    millions articles."
                justify="left"
                repoURL="https://github.com/antonymerle/istex-uppa"
                liveURL="https://istex-uppa.herokuapp.com/"
                projectImage={{
                  imageImport: istexUPPA2,
                  width: 800,
                  height: 450,
                  imageAlt: "istex uppa screencap",
                }}
                stack={["TypeScript", "Angular", "rxjs"]}
              />
              <Project
                title="Kanban"
                description="A kanban board that your team manage tasks efficiently by
                draging and dropping items from one column to another, add comment and more."
                justify="right"
                repoURL="https://github.com/antonymerle/kanban-backend"
                liveURL="https://kanban-frontend.herokuapp.com/"
                projectImage={{
                  imageImport: kanban,
                  width: 800,
                  height: 450,
                  imageAlt: "kanban screencap",
                }}
                stack={["NodeJS", "Express", "Socket.io", "React"]}
              />

              <Project
                title="Wordle"
                description="Wordle is a popular online word game where the player has to
                guess a five-letter word in a limited number of attempts."
                justify="left"
                repoURL="https://github.com/antonymerle/wordle"
                liveURL="https://wordle-bay-one.vercel.app/"
                projectImage={{
                  imageImport: wordle,
                  width: 800,
                  height: 450,
                  imageAlt: "wordle game screencap",
                }}
                stack={["JavaScript", "HTML", "CSS"]}
              />
            </ul>
            <ul className="hidden">
              <li className="relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-1 md:col-end-8 md:row-span-full md:min-w-[600px] md:z-10 "></div>
                <div className="absolute top-0 left-0 project-description md:col-start-7 md:col-end-13 md:row-span-full md:z-20"></div>
              </li>

              <li className="relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-5 md:col-end-13 md:row-span-full  md:min-w-[600px] md:z-10 "></div>
                <div className="absolute top-0 left-0 project-description md:col-start-1 md:col-end-7 md:row-span-full md:z-20"></div>
              </li>

              <li className="relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-1 md:col-end-8 md:row-span-full  md:min-w-[600px] md:z-10 "></div>
                <div className="absolute top-0 left-0 project-description md:col-start-7 md:col-end-13 md:row-span-full md:z-20"></div>
              </li>
            </ul>
          </div>
        </section>
        {/* OTHER SIGNIFICANTS PROJECTS */}
        <section
          id="other-projects"
          className="w-full h-max flex flex-col items-center justify-center px-4 py-24 bg-slate-800"
        >
          <h2 className="space-x-2 py-6 text-xl font-bold  md:text-4xl  text-mint">
            Other significants projects
          </h2>

          <ul
            ref={ref}
            className="
          flex flex-col md:flex-col w-full h-full md:h-1/3 md:w-2/3 p-4 text-slate-300 lg:flex-row lg:w-2/3"
          >
            <li className="grid grid-cols-1 grid-flow-row-dense w-full mb-4 bg-slate-700 transition ease-in hover:bg-slate-600 p-12 md:w-full  md:mr-4 rounded-md">
              <FontAwesomeIcon
                icon={faLineChart}
                className="text-slate-300 pb-4 h-[4rem]"
              />
              <h3
                className="text-xl font-bold pb-4 lg:text-3xl text-slate-300 
              "
              >
                SISE ANALYTICS
              </h3>
              <p>
                SISE Analytics is a dashboard that fetches Full-Time-Equivalent
                (FTE) of french universities, process the data and export it on
                a SpreadSheet. Sise Analytics helps academic libraries to manage
                their electronic resources acquisitions based on that FTE data.
              </p>
              <ul className="project-code-live flex justify-center  space-x-2 py-12 md:justify-start">
                <li className="text-slate-300 hover:text-mint">
                  <a
                    href="https://git.univ-pau.fr/amerle001/sise-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      style={{ height: "30px" }}
                    />
                  </a>
                </li>

                <li className="text-slate-300 hover:text-mint">
                  <a
                    href="https://stats-sise.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      style={{ height: "30px" }}
                    />
                  </a>
                </li>
              </ul>
            </li>

            <li className="grid grid-cols-1 grid-flow-row-dense w-full mb-4 bg-slate-700 transition ease-in hover:bg-slate-600 p-12 md:w-full  md:mr-4 rounded-md">
              <FontAwesomeIcon
                icon={faWater}
                className="text-slate-300 pb-4 h-[4rem]"
              />
              <h3
                className="
                text-slate-300 text-3xl font-bold pb-4"
              >
                BOARD.LEASE
              </h3>
              <p>
                Board.lease is a platform made by surfers for surfers. On
                board.lease, you can rent your board on your future holiday
                spot. If you're a local, you can put your surfboard to rent,
                make a little money and help a fellow surfer ! Board.lease is an
                academic project designed to be displayed on mobile phones only.
              </p>
              <ul className="project-code-live flex justify-center  space-x-2 py-12 md:justify-start">
                <li className="text-slate-300 hover:text-mint">
                  <a
                    href="https://github.com/antonymerle/boardLeaseBackend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      style={{ height: "30px" }}
                    />
                  </a>
                </li>

                <li className="text-slate-300 hover:text-mint">
                  <a
                    href="https://board-lease-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      style={{ height: "30px" }}
                    />
                  </a>
                </li>
              </ul>
            </li>

            <li className="grid grid-cols-1 grid-flow-row-dense w-full mb-4 bg-slate-700 transition ease-in hover:bg-slate-600 p-12 md:w-full  md:mr-4 rounded-md">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-slate-300 pb-4 h-[4rem]"
              />
              <h3 className="text-slate-300 text-3xl font-bold pb-4">
                PHISHEYE BROWSER EXTENSION
              </h3>
              <p>
                PhishEye is a web browser extension designed to protect
                Université de Pau webmail users from phishing mails. Attacks
                being predictables, the extension is able to detect malicious
                links, sanitize them and display an informative message to the
                user.
              </p>
              <ul className="project-code-live flex justify-center  space-x-2 py-12 md:justify-start">
                <li className="text-slate-300 hover:text-mint">
                  <a
                    href="https://git.univ-pau.fr/amerle001/phishEye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      style={{ height: "30px" }}
                    />
                  </a>
                </li>

                <li className="text-slate-300 hover:text-mint">
                  <a
                    href="https://git.univ-pau.fr/amerle001/phishEye/-/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      style={{ height: "30px" }}
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="
          bg-gradient-to-r from-pink-400   to-orange-300 
          w-full h-screen flex flex-col items-center justify-start px-4"
        >
          <div className="flex flex-col justify-end space-y-6 mb-12 h-3/5 max-w-[768px] text-slate-600">
            <CallToAction
              mainTitle="Let's build something great"
              secondaryTitle="together"
            />
            <p className="max-w-md mx-auto text-center">
              I'd love to hear about your opportunities. Let's connect and see
              how I can contribute.
            </p>
          </div>
          <div className="bottom h-2/5">
            <Button
              text="Say hi"
              bgColor="bg-slate-50"
              color="text-slate-600"
              outline="border-slate-600"
              hover="hover:bg-mintTransparent hover:text-slate-800 hover:border-slate-800"
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
    </div>
  );
}
