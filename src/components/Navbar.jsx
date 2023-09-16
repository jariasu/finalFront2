

import { Link } from "react-router-dom"
import styles from "../routes/css/Navbar.module.css"
import { useEffect, useState } from "react";
import { Button } from "@mui/material";



const Navbar = () => {

  const [theme, setTheme] = useState("light");


  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container">
      
        
                <Link className ="link" to="/home"><h2 className="h2">Home</h2></Link>
          
        
                <Link className ="link" to="/fav"><h2>Favo</h2></Link>
            
           
                <Link className ="link" to="/contact"><h2>Contact</h2></Link>
           
            <Button  onClick={toggleTheme}>
        Cambiar color
      </Button>
        

    </div>
  );
};

export default Navbar;
