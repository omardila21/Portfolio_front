import "./App.css";
import Proyectos from "./Componentes/Layout/Projects";
import Footer from "./Componentes/UI/Footer";
import {NavigationMenu, MainName, MainPresentacion} from "./Componentes/UI/Navbar"





function App() {
  return ( 
    <>
    <div className="App-header">
    <NavigationMenu/>
    </div>
    <MainName/>
    <MainPresentacion/>
    <Proyectos />
    <Footer/>
    </>
  ) 
}
export default App;