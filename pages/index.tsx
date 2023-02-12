import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import jellyfish from "../public/jellyfish.png";
import logo from "../public/logo.jpg";
import pp from "../public/antony-merle.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const plusBullet = (
    <FontAwesomeIcon icon={faPlus} style={{ height: "10px" }} />
  );

  return (
    <div className="bg-slate-800 font-sans">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
        <section id="about" className="h-max w-full h-screen  bg-slate-50">
          <div
            id="about-container"
            className="h-max max-w-[900px] mx-auto bg-slate-100"
          >
            <div
              id="about-header"
              className="w-full flex flex-row justify-center items-center md:justify-start"
            >
              <h2 className="space-x-2 py-6 text-xl font-bold  md:text-4xl">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis obcaecati ratione eum cum porro dicta soluta
                  iusto possimus cumque ullam esse, laboriosam, aliquam maxime
                  repudiandae doloremque ad magni. Impedit, molestias. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis obcaecati ratione eum cum porro dicta soluta
                  iusto possimus cumque ullam esse, laboriosam, aliquam maxime
                  repudiandae doloremque ad magni. Impedit, molestias. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis obcaecati ratione eum cum porro dicta soluta
                  iusto possimus cumque ullam esse, laboriosam, aliquam maxime
                  repudiandae doloremque ad magni. Impedit, molestias. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis obcaecati ratione eum cum porro dicta soluta
                  iusto possimus cumque ullam esse, laboriosam, aliquam maxime
                  repudiandae doloremque ad magni. Impedit, molestias.
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
                    <span className="mr-2">{plusBullet}</span>MongoDB
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>Express
                  </li>
                  <li className="flex">
                    <span className="mr-2">{plusBullet}</span>NextJS
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
          className="h-max w-full flex flex-col flex-grow-1 justify-start space-y-4  px-6  bg-slate-800 text-center text-slate-300  md:px-24 md:text-left lg:px-64"
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
                <div className="col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 top-0 left-0  bg-cover bg-no-repeat rounded-sm min-w-[200px] md:opacity-100 md:col-start-1 md:col-end-8 md:row-span-full md:bg-mint md:min-w-[600px] md:z-10 ">
                  {/* TODO : replace css bg by optimzed image  */}
                  <Image
                    src={jellyfish}
                    alt="antony merle picture"
                    className="opacity-40 -z-1" // change that when hover
                  />

                  {/* <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div> */}
                </div>
                <div className="absolute top-0 left-0 project-description md:col-start-7 md:col-end-13 md:row-span-full md:z-20">
                  <h3 className="py-8 text-slate-300 text-2xl font-bold md:col-start-9 md:col-end-13 md:row-span-1 md:text-right">
                    JellyFish
                  </h3>
                  <p className="text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-right p-4 md:col-start-7 md:col-end-13">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    molestiae earum, provident corrupti iste dolorum maiores
                    quisquam repellendus in similique dicta veritatis eius
                    expedita labore incidunt laborum ex deserunt porro.
                  </p>
                  <ul className="project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-end">
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>NodeJS</li>
                  </ul>
                  <ul className="project-code-live flex justify-center  space-x-2 py-4 md:justify-end">
                    <li>
                      <FontAwesomeIcon
                        icon={faGithubAlt}
                        className="text-slate-300"
                        style={{ height: "20px" }}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ height: "20px" }}
                        className="text-slate-300"
                      />
                    </li>
                  </ul>
                </div>
              </li>
              {/* SHOWCASE PROJECT 2 */}
              <li className=" w-full h-[350px] md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className=" transition-all hover:scale-105 hover:rounded-sm duration-300 top-0 left-0 w-full h-full opacity-40 bg-[url('../public/jellyfish.png')] bg-cover bg-no-repeat rounded-sm min-w-[200px] md:opacity-100 md:col-start-5 md:col-end-13 md:row-span-full md:bg-mint md:min-w-[600px] md:z-10 ">
                  <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div>
                </div>
                <div className=" project-description md:col-start-1 md:col-end-7 md:row-span-full md:z-20">
                  <h3 className="py-8 text-slate-300 text-2xl font-bold md:col-start-1 md:col-end-4 md:row-span-1 md:text-left">
                    JellyFish
                  </h3>
                  <p className="text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-left p-4 md:col-start-7 md:col-end-13">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    molestiae earum, provident corrupti iste dolorum maiores
                    quisquam repellendus in similique dicta veritatis eius
                    expedita labore incidunt laborum ex deserunt porro.
                  </p>
                  <ul className="project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-start">
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>NodeJS</li>
                  </ul>
                  <ul className="project-code-live flex justify-center  space-x-2 py-4 md:justify-start">
                    <li>
                      <FontAwesomeIcon
                        icon={faGithubAlt}
                        className="text-slate-300"
                        style={{ height: "20px" }}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ height: "20px" }}
                        className="text-slate-300"
                      />
                    </li>
                  </ul>
                </div>
              </li>
              {/* SHOWCASE PROJECT 2 */}
              <li className=" w-full h-[350px] md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden">
                <div className=" transition-all hover:scale-105 hover:rounded-sm duration-300 top-0 left-0 w-full h-full opacity-40 bg-[url('../public/jellyfish.png')] bg-cover bg-no-repeat rounded-sm min-w-[200px] md:opacity-100 md:col-start-1 md:col-end-8 md:row-span-full md:bg-mint md:min-w-[600px] md:z-10 ">
                  <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div>
                </div>
                <div className=" project-description md:col-start-7 md:col-end-13 md:row-span-full md:z-20">
                  <h3 className="py-8 text-slate-300 text-2xl font-bold md:col-start-9 md:col-end-13 md:row-span-1 md:text-right">
                    JellyFish
                  </h3>
                  <p className="text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-right p-4 md:col-start-7 md:col-end-13">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    molestiae earum, provident corrupti iste dolorum maiores
                    quisquam repellendus in similique dicta veritatis eius
                    expedita labore incidunt laborum ex deserunt porro.
                  </p>
                  <ul className="project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-end">
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>NodeJS</li>
                  </ul>
                  <ul className="project-code-live flex justify-center  space-x-2 py-4 md:justify-end">
                    <li>
                      <FontAwesomeIcon
                        icon={faGithubAlt}
                        className="text-slate-300"
                        style={{ height: "20px" }}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ height: "20px" }}
                        className="text-slate-300"
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="contact" className="w-full h-screen  bg-slate-50">
          Let's talk.
        </section>
      </main>
      <footer>Antony Merle, {new Date().getFullYear()}</footer>
    </div>
  );
}
