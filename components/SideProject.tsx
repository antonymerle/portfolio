import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
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
    <li className=" lg:text-left grid grid-cols-1 grid-flow-row-dense justify-center w-full mb-4 bg-slate-700 transition ease-in hover:bg-slate-600 p-12 md:w-full  md:mr-4 rounded-md">
      <div className="flex justify-center xl:justify-start">
        <FontAwesomeIcon
          icon={projectIcon}
          className="text-slate-300 pb-4 h-[4rem]"
        />
      </div>
      <h3 className="text-center xl:text-left text-base  font-bold pb-4 xl:text-xl 2xl:text-2xl text-slate-300 truncate">
        {title}
      </h3>
      <p className="text-center xl:text-left">{description}</p>
      <ul className="w-full project-code-live flex justify-center  space-x-2 py-12 xl:justify-start">
        <li className="text-slate-300 hover:text-mint">
          <a
            href={repoURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to the code repository of this project"
          >
            <FontAwesomeIcon icon={faGithubAlt} style={{ height: "30px" }} />
          </a>
        </li>

        <li className="text-slate-300 hover:text-mint">
          <a
            href={liveURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to the live website of this project"
          >
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
