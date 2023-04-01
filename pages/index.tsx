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

import Link from "next/link";

import { useEffect, useRef } from "react";
import CallToAction from "@/components/CallToAction";
import Button from "@/components/Button";
import Graph from "@/components/Graph";
import Project from "@/components/Project";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import SideProject from "@/components/SideProject";
import SideProjects from "@/components/SideProjects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <About />
        {/* PROJETS */}
        <section
          id="projects"
          className="h-max flex flex-col justify-start 
          xl:w-3/4 2xl:pr-32 2xl:pl-32 min-[1453px]:pl-12 xl:pl-0 xl:pr-0
          space-y-4 mb-48 pt-24 px-6  bg-slate-800 text-center text-slate-300 lg:text-left "
        >
          <div
            id="projects-container"
            className="flex flex-col items-start h-full w-full max-w-[900px]"
          >
            <div
              id="projects-header"
              className="w-full flex flex-row justify-center items-center lg:justify-start"
            >
              <h2 className="space-x-2 py-6 text-xl font-bold  lg:text-4xl">
                <span className="text-lg text-mint">02.</span>
                <span>Projects I built</span>
              </h2>
            </div>
            <ul className="space-y-12 lg:space-y-44">
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
              <li className="relative w-full h-full lg:opacity-100 lg:bg-none lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden">
                <div className="col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-1 lg:col-end-8 lg:row-span-full lg:min-w-[600px] lg:z-10 "></div>
                <div className="absolute top-0 left-0 project-description lg:col-start-7 lg:col-end-13 lg:row-span-full lg:z-20"></div>
              </li>

              <li className="relative w-full h-full lg:opacity-100 lg:bg-none lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden">
                <div className="col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-5 lg:col-end-13 lg:row-span-full  lg:min-w-[600px] lg:z-10 "></div>
                <div className="absolute top-0 left-0 project-description lg:col-start-1 lg:col-end-7 lg:row-span-full lg:z-20"></div>
              </li>

              <li className="relative w-full h-full lg:opacity-100 lg:bg-none lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden">
                <div className="col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-1 lg:col-end-8 lg:row-span-full  lg:min-w-[600px] lg:z-10 "></div>
                <div className="absolute top-0 left-0 project-description lg:col-start-7 lg:col-end-13 lg:row-span-full lg:z-20"></div>
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
          <SideProjects />
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
