import CallToAction from "./CallToAction";
import Button from "./Button";
import useTranslation from "next-translate/useTranslation";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <section
      id="contact"
      className="
          bg-gradient-to-r from-pink-400   to-orange-300 
          w-full h-screen flex flex-col items-center justify-start px-4"
    >
      <div className="flex flex-col justify-end space-y-6 mb-12 h-3/5 max-w-[768px] text-slate-600">
        <CallToAction
          mainTitle={t("main-title")}
          secondaryTitle={t("secondary-title")}
        />
        <p className="mx-auto text-center text-xl md:text-2xl">
          {t("paragraph")}
        </p>
      </div>
      <div className="bottom h-2/5">
        <Button
          text={t("button")}
          bgColor="bg-slate-50"
          color="text-slate-600"
          outline="border-slate-600"
          hover="hover:bg-mintTransparent hover:text-slate-800 hover:border-slate-800"
        />
      </div>
    </section>
  );
};

export default Contact;
