import { projects } from "~~/data/projects";

export const useProject = (projectname) => {
  const project = projects.filter((project) => {
    return project.linktoinfo == projectname;
  });
  // if (project.length == 1) {
  // } else {
  //   return "ERROR";
  // }
  return project[0];
};
