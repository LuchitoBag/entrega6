
import Navbar from "react-bootstrap/Navbar" 
import NavDropdown from "react-bootstrap/NavDropdown" 
import CartWidget from "./CartWidget"
import "./NavBar.css" 
import esla from "./assets/images/esla.jpg"
import { Link } from "react-router-dom"




const NabVar=()=>{

  return(

    <Navbar>
        <Link exact to="/">
        <img className="esla" src={esla}></img> 
        </Link>


    <Navbar.Brand></Navbar.Brand>

   

   

      <Navbar className="menu">

        

            <NavDropdown.Item href="#action3">Inicio</NavDropdown.Item>



          <NavDropdown.Item href="#action4">Indumentaria</NavDropdown.Item>

          

          <NavDropdown.Item href="#action5">Contacto</NavDropdown.Item>
          
          
          
          <CartWidget/>
  
  </Navbar>

 


  </Navbar>
    

    

    
    )

}


export default NabVar
