import React from 'react';
import Biographie from './components/Biographie';
import Footer from './components/Footer';
class App extends React.Component{

  render() {

    return(
      <div>
        <Biographie />
        <Footer />

      </div>
    )
  }
}
export default App;
