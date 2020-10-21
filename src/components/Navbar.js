import React, { useRef, useState } from 'react';

export default function Navbar() {



  const [background, setBackground] = useState({
    validate: false
  })
  const changeColor = () => {
    let x = {...background}
    if (x.validate === false) {
      setBackground({
        validate: true
      })
    } else {
      setBackground({
        validate: false
      })
    }
    console.log(background.validate);
  


  }


  return (
    <div className="">
      <nav id="navcolor" className={`navbar navbar-expand-lg position-absolute w-100 ${background.validate === true ? "bg-dark" : "bg-white"}`}>
        <a id="wano" className="navbar-brand font-weight-bold text-light  " href="#">Wano</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  d-flex justify-content-center " id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center">
            <li className="nav-item active ">
              <button className="custom-btn btn-12 font-weight-bold bg-transparent"><span>Clique!</span><span>biographie</span></button>
            </li>
            <li className="nav-item">
              <button className="custom-btn btn-12 font-weight-bold bg-transparent"><span>Clique!</span><span>Connexion</span></button>
            </li>
            <li className="nav-item">
              <button className="custom-btn btn-12 font-weight-bold bg-transparent"><span>Clique!</span><span>etudiant</span></button>
            </li>
            <li className="nav-item">
              <button onClick={() => changeColor()} className="btn btn-white border"></button>

            </li>
          </ul>
        </div>
      </nav>
      <div className="img-back">

      </div>
    </div>


  )
}




