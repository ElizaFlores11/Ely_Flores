import React, {Fragment} from 'react';
import './styles/Styles.scss';
import Header from './componets/Header/Header'; 
import Routes from './componets/Routes';
import Home from './componets/Home/Home'; 

 function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}

export default App;
