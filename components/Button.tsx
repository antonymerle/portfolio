import { useRef, useEffect } from "react";

interface Props {
  text: String;
  bgColor: String;
  color: String;
  outline: String;
  hover: String;
}

const Button: React.FC<Props> = ({ text, bgColor, color, outline, hover }) => {
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
    bgColor,
    color,
    outline,
    hover,
  };

  return (
    <a
      href="mailto:antony.merle@outlook.fr"
      aria-label="Send a mail to Antony Merle"
    >
      <button
        ref={ref}
        className={`border py-5 px-12 ${buttonConfig.outline} ${buttonConfig.color} 
leading-4 rounded-md 
transition ease-in  ${buttonConfig.bgColor} ${buttonConfig.hover}`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
