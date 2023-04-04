import Graph from "./Graph";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t } = useTranslation("header");

  return (
    <header
      id="welcome"
      className="h-screen w-full flex flex-col justify-start space-y-4  px-6  bg-slate-800 text-center text-slate-300 md:py-48  md:pl-24 md:pr-40 md:text-left lg:px-64"
    >
      <Graph />
      <div className="flex flex-col justify-start container mx-auto z-10">
        <h1
          className="bg-gradient-to-r from-pink-400 to-orange-300 text-transparent bg-clip-text
             flex flex-col 
             mt-20 md:mt-44 space-y-4 pb-12 
             text-2xl font-bold md:text-6xl lg:text-8xl"
        >
          <span className="text-xl text-mint">{t("title")}</span>
          <span className="text-slate-50">Antony Merle.</span>
          <span>{t("title-do")}</span>
        </h1>
        <p className="text-xl md:text-2xl">{t("title-description")}</p>
      </div>
    </header>
  );
};

export default Header;
