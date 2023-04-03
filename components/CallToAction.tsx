import { useRef, useEffect } from "react";

interface Props {
  mainTitle: String;
  secondaryTitle: String;
}

const CallToAction: React.FC<Props> = ({ mainTitle, secondaryTitle }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-down");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(ref.current as any);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <h2 ref={ref} className="text-4xl font-bold  md:text-6xl text-center">
      {mainTitle}
      <span className="text-mint"> {secondaryTitle}</span>{" "}
    </h2>
  );
};

export default CallToAction;
