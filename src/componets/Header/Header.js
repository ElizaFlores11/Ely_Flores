import React from 'react'; 
import { Link } from "react-router-dom";
import Logo from '../../img/elyflores.jpg';

const Header = () =>{
 return (
     <header className="head" >
       <div>
        <img 
            src={Logo} 
            alt="Ely"
            className="img-head"
            />
        <div className="top">
            <a href="https://www.linkedin.com/in/elyfloresg/" target="_black" class="links">
                <i class="fa fa-linkedin-square fa-3x"></i>
            </a>       
            <a href="https://github.com/ElizaFlores11" target="_black" class="links">
                <i class="fa fa-github-square fa-3x"></i>
            </a>
        </div>
        </div>
        <div className="head-flex">
            <div className="flex-width">
                <Link to="/home">
                    <button className="btn-view">Inicio</button>
                </Link>
            </div>
            <div className="flex-width">
                <Link to="/soft">
                    <button className="btn-view">Soft Skill</button>
                </Link>
            </div>
            <div className="flex-width">
                <Link to="/tech">
                    <button className="btn-view">Tech Skill</button>
                </Link>
            </div>
            <div className="flex-width">
                <Link to="/project">
                    <button className="btn-view">Proyectos</button>
                </Link>
            </div>
        </div>
     </header>
 )
}
export default Header; 