import React from 'react';
import Biographie from './components/Biographie';
import Footer from './components/Footer';
import Profil from './components/Profil'
import Formulaire from './components/Biographie'
class App extends React.Component{

  render() {

    return(
      <div>
        <Formulaire/>
        <Profil/>
        
        <Footer />
      </div>
    )
  }
}
export default App;
