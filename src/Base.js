import React from "react"

import { FaInstagram, FaFacebook,  FaGoogle,  FaTwitter} from 'react-icons/fa';
import { IconContext } from "react-icons";


import {Nav, Navbar,Button} from "react-bootstrap"
import { Link } from "react-router-dom";
const Base=()=>{
    return(
        <div>
        <Navbar expand="lg">
         <Link to= "/">
      <img
        alt=""
        src="/assests/logo.png"
        width="210"
        height="70"
        className="d-inline-block align-top"
      />{' '}
    
    </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav"  />
  <Navbar.Collapse id="basic-navbar-nav " >
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    
   
  
    <Nav.Link> <IconContext.Provider value={{ color: "#189047", className: "global-class-name" }}>
  <div>
    <FaFacebook/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "#189047", className: "global-class-name" }}>
  <div>
    <FaGoogle/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "#189047", className: "global-class-name" }}>
  <div>
    <FaTwitter/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "#189047", className: "global-class-name" }}>
  <div>
    <FaInstagram className="mr-sm-4"/>
  </div>
</IconContext.Provider> </Nav.Link>

  {/*<Nav.Link href="/Signin">Signin</Nav.Link>
    <Nav.Link href="/Signin">Signin</Nav.Link>*/}
     <Link to = "/signin">
     <Button variant="outline-success"  className="mr-sm-4" >SignIn</Button>
     </Link>
     {" "}
     <Link to = "/signup">
     <Button variant="outline-success">SignUp</Button>
     </Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
   

            
        </div>  )
}


export default Base;