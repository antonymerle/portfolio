import SideProject from "./SideProject";
import { sideProjects } from "../data/projects";

const sideProjectsJSX = sideProjects.map((project, i) => (
  <SideProject
    projectIcon={project.projectIcon}
    title={project.title}
    description={project.description}
    repoURL={project.repoURL}
    liveURL={project.liveURL}
    key={i}
    delayClass={i}
  />
));

const SideProjects = () => {
  return (
    <ul
      className="
      flex flex-col md:flex-col w-full h-full md:h-1/3 md:w-2/3 py-4 xl:px-4 text-slate-300 lg:flex-row lg:w-2/3"
    >
      {sideProjectsJSX}
    </ul>
  );
};

export default SideProjects;
