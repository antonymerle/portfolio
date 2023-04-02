import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { IMainProject } from "@/data/projects";

const Project: React.FC<IMainProject> = ({
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
    absPos: justify === "right" ? "xl:ml-64" : null,
    stackJustification:
      justify === "right" ? "lg:justify-start" : "lg:justify-end",
    slideDirection:
      justify === "right" ? "animate-slide-in-ltr" : "animate-slide-in-rtl",
    descriptionJustification:
      justify === "right" ? "lg:text-left" : "lg:text-right",
  };

  return (
    <li
      ref={ref}
      className={`${justifyLookupTable.absPos} relative w-full h-full py-12 px-6 bg-slate-700 rounded-md
      lg:opacity-100 lg:bg-transparent lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden`}
    >
      <div
        className={`col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-${
          justify === "right" ? "5" : "1"
        } lg:col-end-${
          justify === "right" ? "13" : "8"
        } lg:row-span-full lg:min-w-[600px] lg:z-10 `}
      >
        <Image
          src={projectImage.imageImport}
          width={projectImage.width}
          height={projectImage.height}
          alt={projectImage.imageAlt}
          priority={true}
        />
      </div>
      <div
        className={`lg:absolute lg:top-0 lg:left-0 project-description lg:col-start-${
          justify === "right" ? "1" : "7"
        } lg:col-end-${
          justify === "right" ? "7" : "13"
        } lg:row-span-full lg:z-20`}
      >
        <h3
          className={`py-8 text-slate-300 text-2xl font-bold lg:col-start-${
            justify === "right" ? "1" : "9"
          } lg:col-end-${
            justify === "right" ? "4" : "13"
          } lg:row-span-1 lg:text-${justify === "right" ? "left" : "right"}`}
        >
          {title}
        </h3>
        <p
          className={`text-center bg-cybGrey rounded-sm text-slate-100 text-sm ${
            justifyLookupTable.descriptionJustification
          } p-4 lg:col-start-${justify === "right" ? "1" : "7"} lg:col-end-${
            justify === "right" ? "6" : "13"
          }`}
        >
          {description}
        </p>
        <ul
          className={`project-technos flex justify-center text-sm space-x-2 py-4 text-mint lg:justify-${
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
