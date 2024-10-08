import { mainProjects } from "../data/projects";
import Project from "./Project";
import useTranslation from "next-translate/useTranslation";

const MainProjects = () => {
  const { t } = useTranslation("projects");

  console.log("len mainProjects", mainProjects.length);
  mainProjects.forEach((project, i) => {
    console.log("project", i, project?.title);
  });
  const mainProjectsJSX = mainProjects.map((project, i) => {
    return (
      project && (
        <Project
          title={project.title}
          description={t(`main-project${mainProjects.length - i}-desc`)}
          projectImage={project.projectImage}
          stack={project.stack}
          repoURL={project.repoURL}
          liveURL={project.liveURL}
          justify={project.justify}
          key={i}
        />
      )
    );
  });

  return <ul className="space-y-12 lg:space-y-44">{mainProjectsJSX}</ul>;
};

export default MainProjects;
