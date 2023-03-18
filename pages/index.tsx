import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faRightFromBracket,
  faEnvelope,
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
import logo from "../public/logo.jpg";
import logoFullSize from "../public/logo.png";
import pp from "../public/antony-merle.jpg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const plusBullet = (
    <FontAwesomeIcon icon={faPlus} style={{ height: "10px" }} />
  );

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
      <header className="relative container mx-auto p-6 ">
        <nav className="flex items-center justify-between">
          <Image src={logo} alt="logo" width={80} height={80} />
          {/* Menu items */}
          <ol className="hidden md:flex justify-between items-center space-x-6 text-mint  ">
            <li className="flex">About</li>
            <li className="flex">Projects</li>
            <li className="flex">Contact</li>
            <li className="flex">Resume</li>
          </ol>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center w-full">
        <section
          id="welcome"
          className="h-screen flex flex-col justify-start space-y-4  px-6  bg-slate-800 text-center text-slate-300  md:px-24 md:text-left lg:px-64"
        >
          <div className="flex flex-col justify-start space-y-4 container mx-auto">
            <h1 className="flex flex-col mt-28 space-y-4  text-xl font-bold  md:text-6xl">
              <span className="text-sm text-mint">Hi, my name is </span>
              <span className="text-slate-50">Antony Merle.</span>
              <span>I build apps for today's Internet.</span>
            </h1>
            {/* TODO: make it readable on large screen by narrowing column */}
            <p>
              Full Stack Web Developer with a passion for crafting intuitive and
              user-friendly web experiences. My main focus is developing
              responsive and dynamic websites that engage visitors and meet
              business requirements. With 3 years of experience and a focus on
              continual learning, I am committed to delivering high-quality and
              innovative solutions.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="h-max w-full py-24 px-6 bg-slate-50">
          <div
            id="about-container"
            className="h-max max-w-[900px] mx-auto bg-slate-100"
          >
            <div
              id="about-header"
              className="w-full flex flex-row justify-center items-center md:justify-start"
            >
              <h2 className="space-x-2  text-xl font-bold  md:text-4xl">
                <span className="text-lg text-mint">01.</span>
                <span>About me</span>
              </h2>
            </div>

            <div
              id="about-inner"
              className="flex flex-col container md:h-auto md:grid md:gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2"
            >
              <div id="about-text" className="text-center md:text-left">
                <p>
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
                  surfoard renting mobile-first website. I am now open to work.
                  Here are some details about my stack :
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
                <span className="text-lg text-mint">03.</span>
                <span>Projects I built</span>
              </h2>
            </div>
            <ul className="space-y-44">
              {/* SHOWCASE PROJECT 1 */}
              {/* 1 ligne, 12 col. Image left 8 span 8 project card overflow 7/13 */}
              <li className="relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-1 md:col-end-8 md:row-span-full md:bg-mint md:min-w-[600px] md:z-10 ">
                  {/* TODO : replace css bg by optimzed image  */}
                  <Image
                    src={istexUPPA2}
                    width={800}
                    height={450}
                    alt="istex uppa screencap"
                    className="opacity-40 -z-1" // change that when hover
                  />

                  {/* <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div> */}
                </div>
                <div className="absolute top-0 left-0 project-description md:col-start-7 md:col-end-13 md:row-span-full md:z-20">
                  <h3 className="py-8 text-slate-300 text-2xl font-bold md:col-start-9 md:col-end-13 md:row-span-1 md:text-right">
                    ISTEX-UPPA
                  </h3>
                  <p className="text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-right p-4 md:col-start-7 md:col-end-13">
                    A search engine frontend to the ISTEX database : explore
                    scientific, technical and medical research through 27
                    millions articles.
                  </p>
                  <ul className="project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-end">
                    <li>TypeScript</li>
                    <li>Angular</li>
                    <li>rxjs</li>
                  </ul>
                  <ul className="project-code-live flex justify-center  space-x-2 py-4 md:justify-end">
                    <li>
                      <a
                        href="https://github.com/antonymerle/istex-uppa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithubAlt}
                          className="text-slate-300"
                          style={{ height: "20px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://istex-uppa.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          style={{ height: "20px" }}
                          className="text-slate-300"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* SHOWCASE PROJECT 2 */}
              <li className="relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-5 md:col-end-13 md:row-span-full md:bg-mint md:min-w-[600px] md:z-10 ">
                  {/* TODO : replace css bg by optimzed image  */}
                  <Image
                    src={kanban}
                    width={710}
                    height={450}
                    alt="kanban screencap"
                    className="opacity-40 -z-1" // change that when hover
                  />

                  {/* <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div> */}
                </div>
                <div className="absolute top-0 left-0 project-description md:col-start-1 md:col-end-7 md:row-span-full md:z-20">
                  <h3 className="py-8 text-slate-300 text-2xl font-bold md:col-start-1 md:col-end-4 md:row-span-1 md:text-left">
                    Kanban
                  </h3>
                  <p className="text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-left p-4 md:col-start-1 md:col-end-6">
                    A kanban board that let you manage tasks efficiently by
                    draging and dropping items from one column to another.
                  </p>
                  <ul className="project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-start">
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Socket.io</li>
                    <li>React</li>
                  </ul>
                  <ul className="project-code-live flex justify-center  space-x-2 py-4 md:justify-start">
                    <li>
                      <a
                        href="https://github.com/antonymerle/kanban-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithubAlt}
                          className="text-slate-300"
                          style={{ height: "20px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kanban-frontend.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          style={{ height: "20px" }}
                          className="text-slate-300"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* SHOWCASE PROJECT 3 */}
              <li className="relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-1 md:col-end-8 md:row-span-full md:bg-mint md:min-w-[600px] md:z-10 ">
                  {/* TODO : replace css bg by optimzed image  */}
                  <Image
                    src={wordle}
                    width={800}
                    height={583}
                    alt="wordle screencap"
                    className="opacity-40 -z-1" // change that when hover
                  />

                  {/* <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div> */}
                </div>
                <div className="absolute top-0 left-0 project-description md:col-start-7 md:col-end-13 md:row-span-full md:z-20">
                  <h3 className="py-8 text-slate-300 text-2xl font-bold md:col-start-9 md:col-end-13 md:row-span-1 md:text-right">
                    Wordle
                  </h3>
                  <p className="text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-right p-4 md:col-start-7 md:col-end-13">
                    Wordle is a popular online word game where the player has to
                    guess a five-letter word in a limited number of attempts.
                  </p>
                  <ul className="project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-end">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul className="project-code-live flex justify-center  space-x-2 py-4 md:justify-end">
                    <li>
                      <a
                        href="https://github.com/antonymerle/wordle"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithubAlt}
                          className="text-slate-300"
                          style={{ height: "20px" }}
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://wordle-bay-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          style={{ height: "20px" }}
                          className="text-slate-300"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="contact"
          className="w-full h-screen flex flex-col items-center justify-start px-4 bg-slate-50"
        >
          <div className="flex flex-col justify-end space-y-6 mb-12 h-3/5 max-w-[768px] text-slate-600">
            <h2 className="text-4xl font-bold  md:text-6xl text-center">
              Let's build something great{" "}
              <span className="text-mint">together</span>{" "}
            </h2>
            <p className="max-w-md mx-auto text-center">
              I'd love to hear about your opportunities. Let's connect and see
              how I can contribute.
            </p>
          </div>
          <div className="bottom h-2/5">
            <button
              className="border py-5 px-12 border-slate-600 text-slate-600 
          leading-4 rounded-md 
          transition ease-in  bg-slate-50 hover:bg-mintTransparent"
            >
              Say Hi !
            </button>
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
          className="rounded-full md:transition-all md:hover:scale-105 md:hover:rounded-full md:duration-300 border-4  border-mint"
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
            <li className="border-2 border-slate-100 p-6 rounded-full transition-colors duration-300 ease-in hover:bg-slate-600">
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
