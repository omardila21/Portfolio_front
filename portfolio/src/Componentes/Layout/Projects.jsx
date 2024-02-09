import *as React from "react";
import ProjectCard from '../UI/cards';
import "../../App.css";
import topImage from '../../Pictures/trr7.png'
import cocoImage  from'../../Pictures/cocode.png'



const projects = [
  {
    imagen: <img src={topImage} alt="TopRated"></img>,
    title: 'Top Rated Reviews',
    tecnology: 'Page created with JavaScript for academic purposes with the intention of being a movie listings consultation portal.',
    url:'https://top-rated-reviews.netlify.app/'
  },
  {
    imagen: <img src={cocoImage} alt="cocode"></img>,
    title: 'Cocode',
    tecnology:'',
    url:'https://c15-30-ft-java-react-frontcocode.vercel.app/'
  },
  {
    imagen: <img src={topImage} alt="TopRated"></img>,
    title: 'Top Rated Reviews',
    tecnology: 'Page created with JavaScript for academic purposes with the intention of being a movie listings consultation portal.',
    url:'https://top-rated-reviews.netlify.app/'
  }, 
  {
    imagen: <img src={topImage} alt="TopRated"></img>,
    title: 'Top Rated Reviews',
    tecnology: 'Page created with JavaScript for academic purposes with the intention of being a movie listings consultation portal.',
    url:'https://top-rated-reviews.netlify.app/'
  },
 
];

const Proyectos = () => {
 
  return (
    <section id="projectSection">
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    </section>
  );
  
};

export default Proyectos;