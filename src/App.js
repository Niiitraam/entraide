import React from 'react';
import Formulaire from './components/Formulaire';
import Modalconnec from './components/Modalconnec';
import Profil from './components/Profil';

function App() {

  const Apparition = () => {
    console.log('salut');
  return(
    <Modalconnec className = 'PopUpVisible'></Modalconnec>

  )    
}
  return (
    <div>
      <button onClick = {Apparition}> Appuyer ici pour ouvrir le modal</button>


      <Formulaire/>
      <Profil/>
    </div>
  );
}

export default App;
