import React, {Fragment} from 'react'; 
import { Layout } from 'antd';
import MenuD from '../MenuD/MenuD'; 
const { Sider, Header} = Layout; 

const Soft = () =>{
    return(
        <Fragment>
        <Layout style={{ background: 'transparent' }}>
            <Sider style={{ background: 'transparent' }} >
            <div className="menu2">
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
            <div className="descripcion-skill efectsoft">  
                <h2>Mentalidad de Crecimiento y Autoaprendizaje
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
                </h2>

                <br/>
                <p>Soy curiosa, me gusta investigar por mi cuenta, acepto el error instantáneo para aprender.</p>
            </div>
            
            <div className="descripcion-skill efectsoft">  
                <h2>Adaptabilidad
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
                </h2>
                <br/>
                <p>Me adapto a los cambios nuevos, me ubico fácilmente en los distintos escenarios sociables. </p>
            </div>
            
            <div className="descripcion-skill efectsoft">
                <h2>Autoconfianza
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
                </h2>
                <br/>
                <p>Detecto en que si me puedo lograr, ante a lo que no busco impulsarme para lograrlo y creer para aprender.</p>
            </div>
        </div>
            <br/>
            <div className="proyect">
            <div className="descripcion-skill efectsoft">
                <h2>Empatía
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
                </h2>
                <br/>
                <p>Trato de entender desde como piensa y como siente la otra persona.</p>
            </div>
            
            <div className="descripcion-skill efectsoft">
                <h2>Organización de Tiempo
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
                </h2>
                <br/>
                <p>Planifico mis  tareas a realizar por cada proyecto asignado. </p>
            </div>
            
            <div className="descripcion-skill efectsoft">  
                <h2>Autocuidado
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
                </h2>
                <br/>
                <p>Tomo la responsabilidad de mi bienestar, físico, emocional y social. Tengo hábitos y practicas busco cuidarme y preservarme.</p>
            </div>
        </div>
    </div>
    </Fragment>
    )
}
export default Soft; 