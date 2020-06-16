import Project from "../cards/Project";

const ProjectWrapper = ({ data }) => {
  console.log(data[0]);
  return (
    <>
      {data.map((project) => (
        <Project
          link={project.html_url}
          title={project.name}
          description={project.description}
          stars={project.stargazers_count}
          watchers={project.watchers_count}
          forks={project.forks_count}
        />
      ))}
    </>
  );
};

export default ProjectWrapper;
