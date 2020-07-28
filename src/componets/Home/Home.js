import React from 'react'; 
import bicicleta from "../../img/bicicleta.png";

const Home = () =>{
return (
    <div className="content-section">
        <div className="flex">
        <div className="img-start" >
        <img
            src={bicicleta}
            alt="Ely"
        />
        <h1>Ely Flores</h1>
        </div>
        <div className="descripcion">
            <p>Búsqueda de nuevos retos en el ámbito de TI. </p>
            <p>Apasionada por crear código y diseño web. </p> 
            <p>Capaz de adaptarme a las circunstancias y dar lo mejor de mí.</p>
        </div>
    </div>
    </div>
)
}
export default Home; 