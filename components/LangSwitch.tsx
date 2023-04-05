import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

const LangSwitch = () => {
  const { lang } = useTranslation();

  return (
    <button
      className="md:transition-colors md:duration-300 md:ease-in text-slate-mint hover:text-slate-50 italic"
      onClick={async () => {
        await setLanguage(lang === "en" ? "fr" : "en");
      }}
    >
      {(lang === "en" ? "fr" : "en").toUpperCase()}
    </button>
  );
};

export default LangSwitch;
