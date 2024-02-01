import React from 'react';
import ProjectCard from '../UI/cards';
import "../../App.css";
import topImage from '../../Pictures/trr7.png'
import html5Image from '../../Pictures/html5.png'
import cocoImage  from'../../Pictures/cocode.png'


const projects = [
  
  {
    imagen: <img src={topImage} alt="TopRated"></img>,
    title: 'Top Rated Reviews',
    url:'https://top-rated-reviews.netlify.app/'
  },
  {
    imagen: <img src={cocoImage} alt="cocode"></img>,
    title: 'Cocode',
    url:'https://c15-30-ft-java-react-frontcocode.vercel.app/'
  },
  {
    imagen: <img src={html5Image} alt="HTML"></img>,
    title: 'Top Rated Reviews',
    tecnology:'Javascript',
    desarrollo: 'Front-end ó Back-end',
    status:'En proceso ó Finalizado',
    description: 'Descripción del Proyecto 1.',
    image: 'URL de la imagen 1',
    url:'https://www.youtube.com/results?search_query=animacion+de+letras+en+react'
  },
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