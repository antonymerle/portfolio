import Image from "next/image";
import pp from "../public/antony-merle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const plusBullet = <FontAwesomeIcon icon={faPlus} style={{ height: "10px" }} />;

const About = () => {
  return (
    <section
      id="about"
      className="h-fit md:h-screen w-full py-12 px-6 bg-slate-50 z-10"
    >
      <div
        id="about-container"
        className="h-3/5 max-w-[900px] mx-auto px-12 pt-24  bg-slate-100 "
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
          className="flex flex-col container md:h-auto md:grid md:gap-6 md:grid-cols-[3fr_2fr] md:grid-rows-2"
        >
          <div id="about-text" className="text-center md:text-left">
            <p className="pb-6">
              I am a father of three and live in the Basque Country, southwest
              of France. It's a beautiful land and culture that inspire me
              everyday in my work. Since the beginning of my programming journey
              in 2017, I worked as head of IT for the University of Pau's
              academic libraries. I specialized in JavaScript and TypeScript to
              build applications everybody can use simply in their browser, with
              no installation needed. I built apps that focus on very different
              topics like providing business intelligence, automating repetitive
              tasks, helping students with administrative procedures. In 2023, I
              gratuaded at La Capsule bootcamp, worked on board.lease, a peer to
              peer surfoard renting mobile-first website. I am currently open to
              work.
            </p>

            <h3 className="space-x-2  text-lg font-bold pt-16 pb-2  md:text-xl text-slate-700">
              Stack
            </h3>
            {/* bloc compétences */}
            <ul className="grid grid-cols-2 grid-rows-3  my-4 text-sm">
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
  );
};

export default About;
