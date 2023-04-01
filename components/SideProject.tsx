import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faLineChart,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

interface Props {
  projectIcon: IconDefinition;
  title: string;
  description: string;
  repoURL: string;
  liveURL: string;
}

const SideProject: React.FC<Props> = ({
  projectIcon,
  title,
  description,
  repoURL,
  liveURL,
}) => {
  return (
    <li className="grid grid-cols-1 grid-flow-row-dense w-full mb-4 bg-slate-700 transition ease-in hover:bg-slate-600 p-12 md:w-full  md:mr-4 rounded-md">
      <FontAwesomeIcon
        icon={projectIcon}
        className="text-slate-300 pb-4 h-[4rem]"
      />
      <h3
        className="text-xl font-bold pb-4 lg:text-3xl text-slate-300 
              "
      >
        {title}
      </h3>
      <p>{description}</p>
      <ul className="project-code-live flex justify-center  space-x-2 py-12 md:justify-start">
        <li className="text-slate-300 hover:text-mint">
          <a href={repoURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} style={{ height: "30px" }} />
          </a>
        </li>

        <li className="text-slate-300 hover:text-mint">
          <a href={liveURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ height: "30px" }}
            />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default SideProject;
