import "./App.css";
import Proyectos from "./Componentes/Layout/Projects";
import Footer from "./Componentes/UI/Footer";
import {NavigationMenu, MainPresentacion} from "./Componentes/UI/Navbar"






function App() {
  return ( 
    <>
    <div className="App-header">
    <NavigationMenu/>
    </div>
    <p>&nbsp;</p>
    <section id="aboutMeSection">
    <MainPresentacion/>
    </section>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section id="projectsSection"><h2 style={{ fontSize: '35px', textAlign: 'justify', marginLeft: '3%' }}>Projects</h2></section>
    <p>&nbsp;</p>
    <Proyectos />
    <p>&nbsp;</p>
    <Footer/>
    </>
  ) 
}
export default App;