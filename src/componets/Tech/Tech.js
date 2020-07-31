import React, {Fragment} from 'react'; 
import Header from '../Header/Header'; 
import Html from '../../img/html5.png'; 
import Css from '../../img/css3.png'; 
import JavaScript from '../../img/JavaScrip.png'; 
import GitHub from '../../img/GitHub.jpg'; 
import Figma from '../../img/Figma.png'; 
import ImgReact from '../../img/logo192.png';
const Tech = () =>{
    return (
        <Fragment>
        <Header />
        <div className="content-section">
            <br/>
            <div className="proyect">
            <div className="descripcion-skill">  
            <img src={Html} 
                className="img-skills"
                alt="Ely Flores" />
                <h2 className="h2-Tech">Html5 </h2>
                <br/>
                <p>Se emplea para crear la estructura de una página web o de una app.</p>
            </div>
            
            <div className="descripcion-skill">  
                <img 
                 src={Css} 
                 className="img-skills"
                 alt="Ely Flores" />
                <h2 className="h2-Tech">Css3 </h2>
                <br/>
                <p>Se utiliza crear el diseño y el estilo de una app. </p>
            </div>
            
            <div className="descripcion-skill">  
                <img 
                src={JavaScript} 
                className="img-skills"
                alt="Ely Flores" />
                <h2 className="h2-Tech">Javascript </h2>
                <br/>
                <p>Para que la app sea dinámico y sea llamativa para el usuario.</p>
            </div>
        </div>
            <br/>
        <div className="proyect">
            <div className="descripcion-skill">  
            <img 
                src={GitHub} 
                className="img-skills"
                alt="Ely Flores" />
            <h2 className="h2-Tech">GitHub </h2>
            <br/>
            <p>Para tener el control de las versiones de un proyecto y así mismo poder colaborar en equipo.</p>
            </div>
            
            <div className="descripcion-skill">  
            <img 
                src={Figma} 
                class="img-skills" 
                alt="Ely Flores"
                />
            <h2 className="h2-Tech">Figma </h2>
            <br/>
            <p>Lo utilizo para crear prototipo de las pantallas de una página web o de una  app.</p>
            
            </div>
            
            <div className="descripcion-skill">  
                <img 
                    src={ImgReact} 
                    class="img-skills"
                    alt="Ely Flores" />
                <h2 className="h2-Tech">React </h2>
                <br/>
                <p>Es una libreria javascript, imprlementada para el desarrollo de interfazes de usuarios</p>
            </div>
            </div>
            <br/>
        </div>
        </Fragment>
    )
}
export default Tech; 