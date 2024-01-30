import React from 'react';
import ProjectCard from '../UI/cards';
import "../../App.css";
import html5Image from '../../Pictures/html5.png'


const projects = [
  
  {
    imagen: <img src={html5Image} alt="HTML"></img>,
    title: 'Top Rated Reviews',
    tecnology:'Javascript',
    desarrollo: 'Front-end ó Back-end',
    status:'En proceso ó Finalizado',
    description: 'Descripción del Proyecto 1.',
    image: 'URL de la imagen 1',
    url:'https://www.youtube.com/results?search_query=animacion+de+letras+en+react'
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