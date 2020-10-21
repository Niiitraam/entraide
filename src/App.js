import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav id="navcolor" className="navbar navbar-expand-lg position-absolute w-100">
          <a className="navbar-brand font-weight-bold" href="#">Wano</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  d-flex justify-content-center " id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item active ">
                <button class="custom-btn btn-12 font-weight-bold bg-transparent"><span>Clique!</span><span>biographie</span></button>
              </li>
              <li className="nav-item">
                <button class="custom-btn btn-12 font-weight-bold bg-transparent"><span>Clique!</span><span>Connexion</span></button>
              </li>
              <li className="nav-item">
                <button class="custom-btn btn-12 font-weight-bold bg-transparent"><span>Clique!</span><span>etudiant</span></button>
              </li>
              <li className="nav-item">
                <button className="btn btn-secondary">yeup</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="img-back">

        </div>
      </div>


    )
  }
}