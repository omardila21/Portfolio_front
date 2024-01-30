import React, { useState, useEffect } from 'react';
import "../../App.css";
import html5Image from '../../Pictures/html5.png'
import cssImage from '../../Pictures/css.png'
import javaImage from '../../Pictures/java.png'
import jsImage from '../../Pictures/js.png'
import pythonImage from '../../Pictures/python.png'

const NavigationMenu = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('aboutMeSection');
      const projectsSection = document.getElementById('projectsSection');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        aboutMeSection &&
        projectsSection &&
        scrollPosition >= aboutMeSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setActiveSection('ABOUT ME');
      } else if (
        projectsSection &&
        scrollPosition >= projectsSection.offsetTop 
      ) {
        setActiveSection('PROJECTS');
      }  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav" style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none',margin: 0 ,  padding: 0 }}>
      <li className={`tex-nav ${activeSection === 'ABOUT ME' ? 'active' : ''}`} id="aboutMeSection">
        ABOUT ME
      </li>
      <li className={`tex-nav ${activeSection === 'PROJECTS' ? 'active' : ''}`} id="projectsSection">
        PROJECTS
      </li>
    </ul>
  </nav>
  );
};

const MainName = () => {
  const [text, setText] = useState('');
  const fullText = 'DEV OMAR ARDILA';
  const speed = 500; // Velocidad de escritura en milisegundos

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeEffect = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    };

    // Inicia el efecto de escritura después de un breve retraso
    intervalId = setInterval(typeEffect, speed);

    return () => {
      // Limpia el intervalo solo si la escritura no está completa
      
        clearInterval(intervalId);
      
    }  
    
  }, [fullText, speed]);

  return (
    <div className='tex-pre'>
      <p>{text}</p>
    </div>
  );
};

const MainPresentacion = () =>{
  return (
    <section id= "aboutMeSection">
      <h2>ABOUT ME</h2>
    <p>I am a geological engineer who embarked on a journey in the IT industry as a developer,</p>
    <p> possessing the ability to handle various frameworks and libraries. Among the technologies I manage are:</p>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th><img src={html5Image} alt="HTML" /></th>
            <th><img src={cssImage} alt="CSS" /></th>
            <th><img src={pythonImage} alt="Python" /></th>
            <th><img src={jsImage} alt="Javascript" /></th>
            <th><img src={javaImage} alt="Java" /></th>
          </tr>
        </thead>
      </table>    
      </div>
    </section>
  )

}

export  {NavigationMenu, MainName, MainPresentacion};
  
