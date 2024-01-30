import "./App.css";
import Proyectos from "./Componentes/Layout/Projects";
import Footer from "./Componentes/UI/Footer";
import {NavigationMenu, MainName, MainPresentacion} from "./Componentes/UI/Navbar"





function App() {
  return ( 
    <>
    <div className="App-header">
    <NavigationMenu/>
    <MainName/>
    </div>
    <MainPresentacion/>
    <section id="projectsSection"><h2>Projects</h2></section>
    <Proyectos />
  
    <Footer/>
    </>
  ) 
}
export default App;