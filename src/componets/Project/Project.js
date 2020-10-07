import React, {Fragment} from 'react'; 

import Burguer from '../../img/Burguer.png';
import TripLife from '../../img/TripLife.png';
import Rick from '../../img/Rick.png';
import Violence from '../../img/violence.png';
import Walmart from '../../img/duplicado.png';
import { Layout } from 'antd';
import MenuD from '../MenuD/MenuD'; 
const { Sider, Header} = Layout; 

const Project = () =>{
    return (
        <Fragment>
        <Layout style={{ background: 'transparent' }}>
            <Sider style={{ background: 'transparent' }} >
            <div className="menu">
            <MenuD />
            </div>
            </Sider>
            <Header  style={{ background: 'transparent' }}>
            <div className='top'>
            <a href="https://www.linkedin.com/in/elyfloresg/" target="_black" class="links">
                <i class="fa fa-linkedin-square fa-3x"></i>
            </a>       
            <a href="https://github.com/ElizaFlores11" target="_black" class="links">
                <i class="fa fa-github-square fa-3x"></i>
            </a>
            </div>
            </Header>
        </Layout>
        <div className="content-section">
            <div className="proyect">
            <div className="descripcion-proyect efectsoft">  
                    <h2>MVP WALMART 
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                    </h2>
                    <p>Creación de MVP, para el registro y posicionamineto  de publicidad de sus proveedores en su pagina principal, y asi mismo llevar un control de los mismos.  </p>
                    <br/>
                    <img
                        src={Walmart}
                        alt="Ely flores"
                        className="img-project"
                        />
                    <a href="https://github.com/ElizaFlores11/RetoTalentFest" target="_black" class="links">Repositorio</a>
                    <a href="https://publicidad-walmart.web.app/"  target="_black" class="links">Demo</a>
                </div>
                <div className="descripcion-proyect efectsoft">  
                    <h2>BURGUER QUEEN
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                    </h2>
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
                </div>
                <br/>
                <div className="proyect">
                <div className="descripcion-proyect efectsoft">  
                    <h2>TRIPLIFE 
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                    </h2>
                    <p>Social Network, para viajeros creada para compartir y recordar tus historias,
                    fotos y tips con otros viajeros que disfrutan vivir a través de los viajes. </p>
                    <br/>
                    <img
                        src={TripLife}
                        alt="Ely flores"
                        className="img-project"
                        />
                    <a href="https://github.com/ElizaFlores11/CDMX009-Social-Network" target="_black" class="links">Repositorio</a>
                    <a href="https://elizaflores11.github.io/CDMX009-Social-Network/"  target="_black" class="links">Demo</a>
                </div>
                <div className="descripcion-proyect efectsoft">  
                    <h2> RICK & MORTY
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                    </h2>
                    <p> Data de Rick and Morty, para seguir aprendiendo DOM, HTML y Js Se trabajo en dupla para poder avanzar y 
                    poder entender como piensa, buena comunicación con las compañeras.</p>
                    <br/><br/>
                    <img
                        src={Rick}
                        alt="Ely flores"
                        className="img-project"
                        />
                    <a href="https://github.com/ElizaFlores11/CDMX009-Data-Lovers" target="_black"  class="links">Repositorio</a>
                    <a href="https://elizaflores11.github.io/CDMX009-Data-Lovers/"  target="_black" class="links">Demo</a>
                </div>
                </div>
            <br/>
            <div className="proyect">
              <div className="descripcion-proyect efectsoft">  
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
