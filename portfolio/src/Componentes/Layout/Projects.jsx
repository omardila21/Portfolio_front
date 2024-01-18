import React from 'react';
import ProjectCard from '../UI/cards';


const projects = [
  
  {
    
    title: 'Proyecto 1',
    tecnology:'proyecto 1',
    desarrollo: 'Front-end ó Back-end',
    status:'En proceso ó Finalizado',
    description: 'Descripción del Proyecto 1.',
    image: 'URL de la imagen 1',
    URL:'https://www.youtube.com/results?search_query=animacion+de+letras+en+react'
  }
  
];

const Proyectos = () => {
  return (
    <section id = "ProjectsSection">
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    </section>
  );
};

export default Proyectos;