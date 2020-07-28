import React, {Fragment} from 'react';
import './styles/Styles.scss';
import Header from './componets/Header/Header'; 
//import Home from './componets/Home/Home'; 
import Project from './componets/Project/Project'; 

function App() {
  return (
    <Fragment>
      <Header/>
      <Project/>
    </Fragment>
  );
}

export default App;
