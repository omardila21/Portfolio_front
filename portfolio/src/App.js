import "./App.css";
import Footer from "./Componentes/UI/Footer";
import {NavigationMenu, MainName} from "./Componentes/UI/Navbar"


function App() {
  return ( 
    <>
    <div className="container">
    <NavigationMenu/>
    <MainName/>
    </div>
    <Footer/>
    </>
  ) 
}
export default App;