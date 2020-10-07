import React, {Fragment} from 'react'; 
import Html from '../../img/html5.png'; 
import Css from '../../img/css3.png'; 
import JavaScript from '../../img/JavaScrip.png'; 
import GitHub from '../../img/GitHub.jpg'; 
import Figma from '../../img/Figma.png'; 
import ImgReact from '../../img/logo192.png';
import { Layout } from 'antd';
import MenuD from '../MenuD/MenuD'; 
const { Sider, Header} = Layout; 

const Tech = () =>{
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
            <br/>
            <div className="proyect">
            <div className="descripcion-skill efecto">  
            <img src={Html} 
                className="img-skills"
                alt="Ely Flores" />
                <h2 >Html5 </h2>
                <br/>
                <p>Se emplea para crear la estructura de una página web o de una app.</p>
            </div>
            
            <div className="descripcion-skill efecto">  
                <img 
                 src={Css} 
                 className="img-skills"
                 alt="Ely Flores" />
                <h2>Css3 </h2>
                <br/>
                <p>Se utiliza crear el diseño y el estilo de una app. </p>
            </div>
            
            <div className="descripcion-skill efecto">  
                <img 
                src={JavaScript} 
                className="img-skills"
                alt="Ely Flores" />
                <h2>Javascript </h2>
                <br/>
                <p>Para que la app sea dinámico y sea llamativa para el usuario.</p>
            </div>
        </div>
            <br/>
        <div className="proyect">
            <div className="descripcion-skill efecto">  
            <img 
                src={GitHub} 
                className="img-skills"
                alt="Ely Flores" />
            <h2>GitHub </h2>
            <br/>
            <p>Para tener el control de las versiones de un proyecto y así mismo poder colaborar en equipo.</p>
            </div>
            
            <div className="descripcion-skill efecto">  
            <img 
                src={Figma} 
                class="img-skills" 
                alt="Ely Flores"
                />
            <h2>Figma </h2>
            <br/>
            <p>Lo utilizo para crear prototipo de las pantallas de una página web o de una  app.</p>
            
            </div>
            
            <div className="descripcion-skill efecto">  
                <img 
                    src={ImgReact} 
                    class="img-skills"
                    alt="Ely Flores" />
                <h2>React </h2>
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