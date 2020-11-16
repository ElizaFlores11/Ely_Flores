import React from 'react'; 
import { Layout } from 'antd';
import ElyFlores from '../../img/ElyFloresFE.jpg';
import Walmart from '../../img/Project/walmart.png';
import Burger from '../../img/Project/burguer.png';
import Triplife from '../../img/Project/triplife.png';
import Ricky from '../../img/Project/rick&morty.png';
import Bullying from '../../img/Project/bullying.png';
const Home = () =>{
  return (
  <Layout style={{ background: 'transparent' }}>
    <div className="main">
      <span className="avatar">
        <img src={ElyFlores} alt="ElyFlores" />
      </span>
      <h1 className="animate__animated animate__bounce animate__delay-5s">Ely Flores</h1>
      <p>Desarrollador Web Front end</p>
      <p>Soy Desarrolladora Frontend, apasionada por generar código, estoy en búsqueda de nuevos retos en el ámbito de TI, capaz de adaptarme a las situaciones, en mejora continua y curiosa por nuevos avances.</p>
      <a href="https://www.linkedin.com/in/elyfloresg/" target="_black" className="links">
                <i class="fa fa-linkedin-square fa-3x"></i>
            </a>       
            <a href="https://github.com/ElizaFlores11" target="_black" className="links">
                <i class="fa fa-github-square fa-3x"></i>
            </a>
            <br/>
            <div className="goCV" >
            <a href="./GoPdf" target="_blank" className="links">
              <i class="fa fa-archive fa-3x"></i> CV
              </a>
            </div>
            <div className="dowCV">
            <a href={require('../../docs/ElizabethFlores.pdf')} 
              id="upload"
              download="ElyFlores.pdf"
              className="links"
              >
                  <i class="fa fa-download fa-3x"></i> CV
              </a>
              </div>
    </div>
    <div class="main">
      <div class="progress">
        <p>Html5 91% </p>
        <progress id="html5" max="100" value="91"></progress>
        <span></span>
      </div>
      <div class="progress">
        <p>Css 86%</p>
        <progress id="css" max="100" value="86"></progress>
        <span></span>
      </div>
      <div class="clear"></div>
      <div class="progress">
        <p>Javascript 79%</p>
        <progress id="javascript" max="100" value="79"></progress>
        <span></span>
       </div>
        <div class="progress">
          <p>React 52%</p>
          <progress id="react" max="100" value="52"></progress>
          <span></span>
        </div>
        <div class="clear"></div>
        <div class="progress">
          <p>Node.js 36% </p>
          <progress id="nodejs" max="100" value="36"></progress>
          <span></span>
        </div>
        <div class="progress">
        <p>Php 72%</p>
        <progress id="php" max="100" value="72"></progress>
        <span></span>
        </div>
    </div>
    <div class="main">

    <div className="wrap">
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante">
                      <img src={Walmart} /></div>
                    <div className="atras">
                      WALMART<br/>
                      Creación de MVP, para el registro y posicionamiento  de publicidad de sus proveedores en su pagina principal, y así mismo llevar un control de los mismos.<br /> 
                      Con metodología agíl Scrum y las tecnologpia React, firebase, git, html5 y sass
                    </div>
                </div>
                <br/>
                <a href="https://github.com/ElizaFlores11/RetoTalentFest" target="_black" className="links">Repositorio</a>
                    <a href="https://publicidad-walmart.web.app/"  target="_black" className="links">Demo</a>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante">
                    <img src={Burger} />
                      </div>
                    <div className="atras">
                    BURGUER QUEEN <br/>
                      Proyecto realizado con el framework de React y Firebase, para un restaurante, 
                        donde el mesero realiza la orden de los platillos y en la cocina puede visualizar los
                        platillos.</div>
                </div>
                <br/>
                <a href="https://github.com/ElizaFlores11/CDMX009-BurgerQueen" target="_black" class="links">Repositorio</a>
                <a href="https://burguerqueen-f6391.web.app/"  target="_black" class="links">Demo</a>
           </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante">
                    <img src={Triplife} />
                    </div>
                    <div className="atras">
                    TRIPLIFE<br/>
                      Social Network, para viajeros creada para compartir y recordar tus historias,
                    fotos y tips con otros viajeros que disfrutan vivir a través de los viajes.
                    Javascript, html5, css3, metodología agíl Scrum</div>
                </div>
                <a href="https://github.com/ElizaFlores11/CDMX009-Social-Network" target="_black" class="links">Repositorio</a>
                    <a href="https://elizaflores11.github.io/CDMX009-Social-Network/"  target="_black" class="links">Demo</a>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante">
                    <img src={Ricky} />
                    </div>
                    <div className="atras">
                    RICK & MORTY <br/>
                      Data de Rick and Morty, para seguir aprendiendo DOM, HTML y Js Se trabajo en dupla para poder avanzar y 
                    poder entender como piensa, buena comunicación con las compañeras.</div>
                </div>
                <a href="https://github.com/ElizaFlores11/CDMX009-Data-Lovers" target="_black"  class="links">Repositorio</a>
                    <a href="https://elizaflores11.github.io/CDMX009-Data-Lovers/"  target="_black" class="links">Demo</a>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante">
                    <img src={Bullying} />
                    </div>
                    <div className="atras">
                    BULLYING SCHOOL <br/>
                      Se utiliza para enviar mensaje ocultos a los profesores, cuando los estudiantes 
                    son amenazados y tienen miedo de expresarlo a un profesor o tutor.<br/>
                    Con Javascript vanilla, html5 y css3 básico.</div>
                </div>
                  <a href="https://github.com/ElizaFlores11/CDMX009-cipher" target="_black"  class="links">Repositorio</a>
                  <a href="https://elizaflores11.github.io/CDMX009-cipher/"  target="_black" class="links">Demo</a>
            </div>
        </div>
      </div>
  </Layout>
  )
}
export default Home;


