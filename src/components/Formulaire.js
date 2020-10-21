import React, { useRef } from 'react';

export default class Formulaire extends React.Component {

  state = {
    inputs: [
      {
        nom: "HTML",
        value: "HTML",
        validate: false,
      }, {
        nom: "CSS",
        value: "CSS",
        validate: false,
      }, {
        nom: "JS",
        value: "JS",
        validate: false,
      }, {
        nom: "ReactJS",
        value: "ReactJS",
        validate: false,
      },
    ]
  }

  handleValidate = (i) => {
    let x = this.state
    if (x.inputs[i].validate === false) {
      x.inputs[i].validate = true
    } else {
      x.inputs[i].validate = false
    }
    this.setState(x)
    console.log(this.state.inputs[i].validate);
  }

  validate = (e) => {
    e.preventDefault()
    let x = this.state
    for (let i = 0; i < x.inputs.length; i++) {
      if (x.inputs[i].validate === true) {
        console.log(this.state.inputs[i].nom);
      }
    }
    this.setState(x)
  }

  render() {

    return (

      <form className="container-fluid w-25 mt-5">
        <div className="taille form-group">
          <h5>Nom</h5>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="taille form-group">
          <h5>Prenom</h5>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        {/* les labels */}

        <div className="form-group">
          <h5>matiére matriser:</h5>
        </div>

        <div className="row ml-1">
          {this.state.inputs.map((e, i) => {
            return (
              <div key={i} className="form-group form-check p-3">
                <input onChange={() => this.handleValidate(i)} value={e.value} type="checkbox" className="form-check-input " id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">{e.nom}</label>
              </div>

            )
          })}
        </div>

        <button onClick={(e) => this.validate(e)} type="submit" className="btn btn-primary">Connexion</button>
      </form>
    );
  }
}
