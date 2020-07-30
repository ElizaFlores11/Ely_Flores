import React, {Fragment} from 'react'; 
import bicicleta from "../../img/bicicleta.png";
import { BrowserRouter } from 'react-router-dom';

const Home = () =>{
return (
    //<BrowserRouter>
    <Fragment>
        
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
    //</BrowserRouter
)
}
export default Home; 