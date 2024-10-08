import Image from "next/image";
import pp from "../public/antony-merle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const plusBullet = <FontAwesomeIcon icon={faPlus} style={{ height: "10px" }} />;

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section
      id="about"
      className="h-fit md:h-screen w-full py-12 px-6 bg-slate-50 z-10"
    >
      <div
        id="about-container"
        className="h-3/5 max-w-[900px] mx-auto px-8 md:px-12 pt-24 bg-slate-100 "
      >
        <div
          id="about-header"
          className="w-full flex flex-row justify-center items-center md:justify-start text-slate-700"
        >
          <h2 className="space-x-2  text-xl font-bold pb-6  md:text-4xl">
            <span className="text-lg">01.</span>
            <span>{t("title")}</span>
          </h2>
        </div>

        <div
          id="about-inner"
          className="flex flex-col container md:h-auto md:grid md:gap-6 md:grid-cols-[3fr_2fr] md:grid-rows-2"
        >
          <div id="about-text" className="text-center md:text-left">
            <p className="pb-6">
              <Trans
                i18nKey="about:description"
                components={[
                  <a
                    href="https://hyproom.com"
                    key="0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-700 hover:underline"
                  />,
                ]}
              />
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
                <span className="mr-2">{plusBullet}</span>React
              </li>
              <li className="flex">
                <span className="mr-2">{plusBullet}</span>NextJS
              </li>
              <li className="flex">
                <span className="mr-2">{plusBullet}</span>Go
              </li>
              <li className="flex">
                <span className="mr-2">{plusBullet}</span>SQL / NoSQL
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
