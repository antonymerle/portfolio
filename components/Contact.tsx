import CallToAction from "./CallToAction";
import Button from "./Button";

const Contact = () => {
  return (
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
        <p className="mx-auto text-center text-xl md:text-2xl">
          I&apos;d love to hear about your opportunities. Let&apos;s connect and
          see how I can contribute.
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
  );
};

export default Contact;
