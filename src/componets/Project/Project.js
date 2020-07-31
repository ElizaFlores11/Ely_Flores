import React, {Fragment} from 'react'; 
import Header from '../Header/Header'; 

import Burguer from '../../img/Burguer.png';
import TripLife from '../../img/TripLife.png';
import Rick from '../../img/Rick.png';
import Violence from '../../img/violence.png';

const Project = () =>{
    /*<div className="proyect">
            <div className="descripcion-proyect">  
                <h2>BULLYING SCHOOL </h2>
                <p>Se utiliza para enviar mensaje ocultos a los profesores, cuando los estudiantes 
                    son amenazados y tienen miedo de expresarlo a un profesor o tutor.</p>
                 <a href="https://github.com/ElizaFlores11/CDMX009-cipher" target="_black"  class="links">Repositorio</a>
                <a href="https://elizaflores11.github.io/CDMX009-cipher/"  target="_black" class="links">Demo</a>
            </div>
            <div className="descripcion-proyect">  
                <h2>MD-LINKS </h2>
                <p>Creación de librería para buscar links en archivos Markdown realizar 
                    conteo y urls válidos, a través de flags, desarrollado con Node.js y creación de la arquitectura (boilerplate).
                </p>
                 <a href="https://github.com/ElizaFlores11/CDMX009-MdLinks" target="_black"  class="links">Repositorio</a>
               </div>
            </div>
        </div>*/
    return (
        <Fragment>
        <Header />
        <div className="content-section">
            <div className="proyect">
                <div className="descripcion-proyect">  
                    <h2>BURGUER QUEEN </h2>
                    <p>Proyecto realizado con el framework de React y Firebase, para un restaurante, 
                        donde el mesero realiza la orden de los platillos y en la cocina puede visualizar los
                        platillos.  </p>
                        <br/> <br/>
                        <img
                        src={Burguer}
                        alt="Ely flores"
                        className="img-project"
                        />
                    
                    <a href="https://github.com/ElizaFlores11/CDMX009-BurgerQueen" target="_black" class="links">Repositorio</a>
                    <a href="https://burguerqueen-f6391.web.app/"  target="_black" class="links">Demo</a>
                </div>
                <div className="descripcion-proyect">  
                    <h2>TRIPLIFE </h2>
                    <p>Social Network, para viajeros creada para compartir y recordar tus historias,
                    fotos y tips con otros viajeros que disfrutan vivir a través de los viajes. </p>
                    <img
                        src={TripLife}
                        alt="Ely flores"
                        className="img-project"
                        />
                    <a href="https://github.com/ElizaFlores11/CDMX009-Social-Network" target="_black" class="links">Repositorio</a>
                    <a href="https://elizaflores11.github.io/CDMX009-Social-Network/"  target="_black" class="links">Demo</a>
                </div>
            </div>
            <br/>
            <div className="proyect">
                <div className="descripcion-proyect">  
                    <h2> RICK & MORTY</h2>
                    <p> Data de Rick and Morty, para seguir aprendiendo DOM, HTML y Js Se trabajo en dupla para poder avanzar y 
                    poder entender como piensa, buena comunicación con las compañeras.</p>
                    <br/>
                    <img
                        src={Rick}
                        alt="Ely flores"
                        className="img-project"
                        />
                    <a href="https://github.com/ElizaFlores11/CDMX009-Data-Lovers" target="_black"  class="links">Repositorio</a>
                    <a href="https://elizaflores11.github.io/CDMX009-Data-Lovers/"  target="_black" class="links">Demo</a>
                </div>

                <div className="descripcion-proyect">  
                <h2>BULLYING SCHOOL </h2>
                <p>Se utiliza para enviar mensaje ocultos a los profesores, cuando los estudiantes 
                    son amenazados y tienen miedo de expresarlo a un profesor o tutor.</p>
                    <br/>
                    <img
                        src={Violence}
                        alt="Ely flores"
                        className="img-project"
                        />
                    <a href="https://github.com/ElizaFlores11/CDMX009-cipher" target="_black"  class="links">Repositorio</a>
                <a href="https://elizaflores11.github.io/CDMX009-cipher/"  target="_black" class="links">Demo</a>
            </div>
            
            </div>
            <br/><br/>
            </div>
            </Fragment>
    )
}; 
export default Project; 
