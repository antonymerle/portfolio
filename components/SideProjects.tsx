import SideProject from "./SideProject";
import { sideProjects } from "../data/projects";
import useTranslation from "next-translate/useTranslation";

const SideProjects = () => {
  const { t } = useTranslation("projects");

  const sideProjectsJSX = sideProjects.map((project, i) => (
    <SideProject
      projectIcon={project.projectIcon}
      title={project.title}
      description={t(`side-project${i}-desc`)}
      repoURL={project.repoURL}
      liveURL={project.liveURL}
      key={i}
      delayClass={i}
    />
  ));

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
