import React, { useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import "../../App.css";

const NavigationMenu = () => {
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = aboutMeRef.current;
      const projectSection = projectRef.current;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (aboutMeSection && scrollPosition >= aboutMeSection.offsetTop &&
          (!projectSection || scrollPosition < projectSection.offsetTop)) {
        console.log('About me section is active');
      } else if (projectSection && scrollPosition >= projectSection.offsetTop &&
                 (!aboutMeSection || scrollPosition < aboutMeSection.offsetTop)) {
        console.log('Projects section is active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav" >
        <ScrollLink
          to="aboutMeSection"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >About me</ScrollLink>
        <div style={{width: '10px'}}></div>
        <ScrollLink
          to="projectSection"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Projects
        </ScrollLink>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
  
