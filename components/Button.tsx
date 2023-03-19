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

  return (
    <button
      ref={ref}
      className={`border py-5 px-12 border-${secondaryColor} text-${secondaryColor} 
leading-4 rounded-md 
transition ease-in  bg-${mainColor} hover:bg-${hoverColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
