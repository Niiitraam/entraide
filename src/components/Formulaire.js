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
    ],
    valeurPersonne : [],
    nom : "",
    prenom : ""
  }
 
  
  handleValidate = (i) => {
    let x = this.state
    if (x.inputs[i].validate === false) {
      x.inputs[i].validate = true
    } else {
      x.inputs[i].validate = false
    }
    this.setState(x)
  }

  validate = (e) => {
    e.preventDefault()
    
    let x = this.state
    let personne = {
      nom : x.nom,
      prenom : x.prenom,
      pointFort : [],
      remediation : []
    }
    for (let i = 0; i < x.inputs.length; i++) {
      if (x.inputs[i].validate === true) {
        personne.pointFort.push(x.inputs[i].nom)
      } else{
        personne.remediation.push(x.inputs[i].nom)
      }
    }
    x.valeurPersonne.push(personne)
    x.nom = ""
    x.prenom = ""
    console.log(x.valeurPersonne);
    this.setState(x)
  }

  handleChangeNom = (e) => {
    this.setState({nom : e.target.value})
  }

  handleChangePrenom = (e) => {
    this.setState({prenom : e.target.value})
  }
  render() {

    return (
      <form className="container-fluid w-25 mt-5">
        <div className="taille form-group">
          <h5>Nom</h5>
          <input onChange={this.handleChangeNom} value={this.state.nom} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="taille form-group">
          <h5>Prenom</h5>
          <input onChange={this.handleChangePrenom} value={this.state.prenom} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        {/* les labels */}

        <div className="form-group">
          <h5>Nous avons crée un algorithme qui permet de vous mettre en contact avec une personne qui pourras vous aidez et que vous pourrez aider dans les cours de molengeek :</h5>
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
        {this.state.valeurPersonne.map((e, i) => {
          return(
            <div key={i}>
              <h2>{e.nom} {e.prenom}</h2>
              {this.state.valeurPersonne[i].pointFort.map((v, k) => 
                  <h3 key={k}>{v}</h3>
                
              )}
              {this.state.valeurPersonne[i].remediation.map((v, k) => 
                  <h3 key={k}>{v}</h3>
                
              )}
            </div>
            

          
          )
        })}
      </form>
    );
  }
}