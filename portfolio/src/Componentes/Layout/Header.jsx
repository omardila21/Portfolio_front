import *as React from "react";
import "../../App.css";
import LogoImage from '../../Pictures/oaap.png'


const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={textContainerStyle}>
        <h1>Mi Sitio Web</h1>
        <p>Bienvenido a mi página</p>
      </div>
      <img src={LogoImage} alt="TopRated"
      />
       
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: '#333',
  color: '#fff',
};

const textContainerStyle = {
  flex: '1',
};

const imageStyle = {
  width: '100px', // Ajusta el tamaño según lo necesites
  height: 'auto', // Esto asegura que la imagen se ajuste proporcionalmente al ancho definido
};

export default Header;
