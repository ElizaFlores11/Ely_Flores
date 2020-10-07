import React from 'react'; 
import { Layout } from 'antd';
import ElyFlores from '../../img/ElyFloresFE.jpg';
import MenuD from '../MenuD/MenuD'; 
const { Sider} = Layout; 

const Home = () =>{
  return (
  <Layout style={{ background: 'transparent' }}>
    <Sider style={{ background: 'transparent' }} >
    <div className="menu">
    <MenuD />
    </div>
    </Sider>
    <div className="main">
      <span className="avatar">
        <img src={ElyFlores} alt="ElyFlores" />
      </span>
      <h1 className="animate__animated animate__bounce animate__delay-5s">Ely Flores</h1>
      <p>Desarrollador Web Front end</p>
      <p>Soy Desarrolladora Frontend, apasionada por generar código, estoy en búsqueda de nuevos retos en el ámbito de TI, capaz de adaptarme a las situaciones, en mejora continua y curiosa por nuevos avances.</p>
      <a href="https://www.linkedin.com/in/elyfloresg/" target="_black" class="links">
                <i class="fa fa-linkedin-square fa-3x"></i>
            </a>       
            <a href="https://github.com/ElizaFlores11" target="_black" class="links">
                <i class="fa fa-github-square fa-3x"></i>
            </a>
    </div>
  </Layout>
  )
}
export default Home; 
