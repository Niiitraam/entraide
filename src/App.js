import React from 'react';
import Biographie from './components/Biographie';
import Footer from './components/Footer';
import Profil from './components/Profil'
import Formulaire from './components/Formulaire'
import Navbar from './components/Navbar'

function App() {  
  return (
    <div>
      <Navbar />
      <Formulaire/>
      <Profil/>
      <Biographie/>
      <Footer/>
    </div>
  );
}
export default App;
