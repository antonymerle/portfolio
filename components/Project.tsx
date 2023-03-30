import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

interface Props {
  projectImage: {
    imageImport: StaticImageData;
    width: number;
    height: number;
    imageAlt: string;
  };
  title: string;
  description: string;
  stack: Array<String>;
  repoURL: string;
  liveURL: string;
  justify: string;
}

const Project: React.FC<Props> = ({
  projectImage,
  title,
  description,
  stack,
  repoURL,
  liveURL,
  justify,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(justifyLookupTable.slideDirection);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current as any);

    return () => {
      observer.disconnect();
    };
  }, []);

  const justifyLookupTable = {
    absPos: justify === "right" ? "md:ml-64" : null,
    stackJustification:
      justify === "right" ? "md:justify-start" : "md:justify-end",
    slideDirection:
      justify === "right" ? "animate-slide-in-ltr" : "animate-slide-in-rtl",
  };

  return (
    <li
      ref={ref}
      className={`${justifyLookupTable.absPos} relative w-full h-full md:opacity-100 md:bg-none md:grid md:grid-cols-12 md:grid-rows-6 md:gap-2 md:overflow-hidden`}
    >
      <div
        className={`col-span-full row-span-full md:transition-all md:hover:scale-105 md:hover:rounded-sm md:duration-300 rounded-sm min-w-[200px] md:opacity-100 md:col-start-${
          justify === "right" ? "5" : "1"
        } md:col-end-${
          justify === "right" ? "13" : "8"
        } md:row-span-full md:min-w-[600px] md:z-10 `}
      >
        {/* TODO : replace css bg by optimzed image  */}
        <Image
          src={projectImage.imageImport}
          width={projectImage.width}
          height={projectImage.height}
          alt={projectImage.imageAlt}
          className="-z-1" // change that when hover
          priority={true}
        />

        {/* <div className="w-full h-full transition-all hover:bg-mint/0 rounded-sm duration-300  md:bg-mint/60 md:backdrop-brightness-75"></div> */}
      </div>
      <div
        className={`absolute top-0 left-0 project-description md:col-start-${
          justify === "right" ? "1" : "7"
        } md:col-end-${
          justify === "right" ? "7" : "13"
        } md:row-span-full md:z-20`}
      >
        <h3
          className={`py-8 text-slate-300 text-2xl font-bold md:col-start-${
            justify === "right" ? "1" : "9"
          } md:col-end-${
            justify === "right" ? "4" : "13"
          } md:row-span-1 md:text-${justify === "right" ? "left" : "right"}`}
        >
          {title}
        </h3>
        <p
          className={`text-center bg-cybGrey rounded-sm text-slate-300 text-sm md:text-right p-4 md:col-start-${
            justify === "right" ? "1" : "7"
          } md:col-end-${justify === "right" ? "6" : "13"}`}
        >
          {description}
        </p>
        <ul
          className={`project-technos flex justify-center text-sm space-x-2 py-4 text-mint md:justify-${
            justify === "right" ? "start" : "end"
          }`}
        >
          {stack.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <ul
          className={`project-code-live flex justify-center  space-x-2 py-4 ${justifyLookupTable.stackJustification}`}
        >
          <li className="text-slate-300 hover:text-mint">
            <a href={repoURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubAlt} style={{ height: "20px" }} />
            </a>
          </li>
          <li className="text-slate-300 hover:text-mint">
            <a href={liveURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ height: "20px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Project;
