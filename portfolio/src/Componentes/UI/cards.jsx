import React from "react";
import "../../App.css";

const ProjectCard = ({ imagen, title, tecnology, url }) => {
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
      
        <div className="project-card img">{imagen}</div>  
        <p>{title}</p>
        <h3>{tecnology}</h3>
        <h4>{url}</h4>
    
    </a>
  );
};

export default ProjectCard;

