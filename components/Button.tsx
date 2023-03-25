import { useRef, useEffect } from "react";

interface Props {
  text: String;
  mainColor: String;
  secondaryColor: String;
  hoverColor: String;
}

const Button: React.FC<Props> = ({
  text,
  mainColor,
  secondaryColor,
  hoverColor,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current as any);

    return () => {
      observer.disconnect();
    };
  }, []);

  const buttonConfig = {
    bgColor: "bg-slate-50",
    color: "text-slate-600",
    outline: "border-slate-600",
    hover: "hover:bg-mintTransparent",
  };

  return (
    <button
      ref={ref}
      className={`border py-5 px-12 ${buttonConfig.outline} ${buttonConfig.color} 
leading-4 rounded-md 
transition ease-in  ${buttonConfig.bgColor} ${buttonConfig.hover}`}
    >
      {text}
    </button>
  );
};

export default Button;
