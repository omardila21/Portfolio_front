import "./App.css";
import Proyectos from "./Componentes/Layout/Projects";
import Footer from "./Componentes/UI/Footer";
import NavigationMenu from "./Componentes/UI/Navbar"
import MainPresentacion from "./Componentes/Layout/Presentation"
import Header from"./Componentes/Layout/Header"





function App() {  
  return ( 
    <>
    <Header/>
    
        <NavigationMenu/>
     
      <p>&nbsp;</p>
      
        <MainPresentacion />
      
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    
      <h2 style={{ fontSize: '35px', textAlign: 'justify', marginLeft: '3%' }}>Projects</h2>
      <p>&nbsp;</p>
      <Proyectos/>
     
     
      <p>&nbsp;</p>
      <Footer />
    </>
  ) 
}
export default App;