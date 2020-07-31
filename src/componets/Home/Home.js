import React, {Fragment} from 'react'; 
import Header from '../Header/Header'; 
import bicicleta from "../../img/bicicleta.png";

const Home = () =>{
return (
    <Fragment>
    <Header />
    <div className="content-section">
        <div className="flex">
        <div className="img-start" >
        <img
            src={bicicleta}
            alt="Ely"
        />
        <h1>Front-End Developer</h1>
        </div>
        <div className="descripcion">
            <h4>Ely Flores</h4>
            <p>Búsqueda de nuevos retos en el ámbito de TI. </p>
            <p>Apasionada por crear código y diseño web. </p> 
            <p>Capaz de adaptarme a las circunstancias y dar lo mejor de mí.</p>
        </div>
    </div>
    </div>
    </Fragment>
)
}
export default Home; 