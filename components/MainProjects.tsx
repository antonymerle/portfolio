import { mainProjects } from "../data/projects";
import Project from "./Project";

const mainProjectsJSX = mainProjects.map((project, i) => (
  <Project
    title={project.title}
    description={project.description}
    projectImage={project.projectImage}
    stack={project.stack}
    repoURL={project.repoURL}
    liveURL={project.liveURL}
    justify={project.justify}
    key={i}
  />
));

const MainProjects = () => {
  return <ul className="space-y-12 lg:space-y-44">{mainProjectsJSX}</ul>;
};

export default MainProjects;
