import  React from "react";
import "../../App.css";



const ProjectCard = ({ imagen, title, description, url }) => {
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
        <div className="project-card img">{imagen}</div>
        <h3>{title}</h3>
        <h3>{description}</h3>
        <h4>{url}</h4>
      </div>
  
    </a>
    

  );
};

export default ProjectCard;

