import React, { useState, useEffect } from 'react';
import "../../App.css";

const NavigationMenu = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('aboutMeSection');
      const projectsSection = document.getElementById('projectsSection');
      const contactMeSection = document.getElementById('contactMeSection');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        aboutMeSection &&
        scrollPosition >= aboutMeSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setActiveSection('ABOUT ME');
      } else if (
        projectsSection &&
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < contactMeSection.offsetTop
      ) {
        setActiveSection('PROJECTS');
      } else if (contactMeSection && scrollPosition >= contactMeSection.offsetTop) {
        setActiveSection('CONTACT ME');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav" style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0 }}>
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
  const fullText = "DEV OMAR ARDILA";
  const speed = 200
  ; // Velocidad de escritura en milisegundos

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeEffect = () => {
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    };

    // Inicia el efecto de escritura después de un breve retraso
    intervalId = setInterval(typeEffect, speed);

    return () => {
      // Limpia el intervalo si el componente se desmonta antes de completar la escritura
      clearInterval(intervalId);
    };
  }, [fullText, speed]);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const MainPresentacion = () =>{
  return (
    <section id= "aboutMeSection">
    <p>I am a geological engineer who embarked on a journey in the IT industry as a developer,</p>
    <p> possessing the ability to handle various frameworks and libraries. Among the technologies I manage are:</p>
    <div className="ima-contenedor">
        <th><img src="html5.png" alt="HTML" /></th>
        <th><img src="CSS.png" alt="CSS" /></th>
        <th><img src="python.png" alt="Python" /></th>
        <th><img src="js.png" alt="Javascript" /></th>
        <th><img src="JAVA.png" alt="Java" /></th>
      </div>
    </section>
  )

}

export  {NavigationMenu, MainName, MainPresentacion};
  
