import React from 'react';
import Formulaire from './components/Formulaire';
import Modalconnec from './components/Modalconnec';
import Navbar from './components/navbar';
import Profil from './components/Profil';

export default function App() {

  const Apparition = () => {
    console.log('salut');
    return (
      <Modalconnec className='PopUpVisible'></Modalconnec>

    )
  }
  return (
    <div>
      <button onClick={Apparition}> Appuyer ici pour ouvrir le modal</button>

      <Navbar/>
      <Formulaire />
      <Profil />
    </div>
  )
}