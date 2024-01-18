import  React from "react"

const ProjectCard = ({ title, description, url }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <span style={{ fontSize: "12px" }}>
          Haz clic para más información
        </span>
      </div>
    </a>
    

  );
};

export default ProjectCard;

