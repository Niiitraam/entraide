import React, { useRef } from 'react';
import Profil from './Profil';

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
        nom: "ReactJS",
        value: "ReactJS",
        validate: false,
      },
    ],
    valeurPersonne: [],
    nom: "",
    prenom: "",
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
      nom: x.nom,
      prenom: x.prenom,
      pointFort: [],
      remediation: []
    }
    let personnes = [
      { id: 1, nom: 'Gang ', prenom: 'Yassine ', pointFort: ['CSS'], remediation: [' HTML', 'ReactJS'] },
      { id: 2, nom: 'Elgouchi ', prenom: 'Mohamed ', pointFort: ['HTML'], remediation: ['ReactJS', 'CSS'] },
      { id: 3, nom: 'Vandendroos ', prenom: 'Valentine ', pointFort: ['ReactJS'], remediation: ['HTML', 'CSS'] },
      { id: 4, nom: 'Boulanger ', prenom: 'Loick', pointFort: ['HTML', 'ReactJS'], remediation: ['CSS'] },
      { id: 5, nom: 'MonkeyD', prenom: 'Luffy', pointFort: ['CSS', 'ReactJS'], remediation: ['HTML']},
      { id: 6, nom: 'Seyour', prenom: 'Rashid', pointFort: ['HTML', 'CSS'], remediation: ['ReactJS']},
    ]

    for (let i = 0; i < x.inputs.length; i++) {
      if (x.inputs[i].validate === true) {
        personne.remediation.push(x.inputs[i].nom)

      } else {
        personne.pointFort.push(x.inputs[i].nom)
      }
    }

    console.log(personnes[2].remediation.toString());
    console.log(personne.pointFort.toString());

    let prof = {
      nom : "",
      prenom : "",
    }

    personnes.forEach(elem => {
      if(personne.remediation.toString() === elem.pointFort.toString()){
        prof.nom=elem.nom;
        prof.prenom=elem.prenom;
        alert("salut " + personne.nom)
        alert("La personne parfaite pour vous aider est " +elem.nom + " " +elem.prenom+ " On vous laisse chercher son profil dans notre section")
        console.log(prof);

      }
    });

    x.valeurPersonne.push(personne)
    x.nom = ""
    x.prenom = ""

    // console.log(x.valeurPersonne);
    this.setState(x)

    return (
      <Profil personne={x}></Profil>
    )
  }

  handleChangeNom = (e) => {
    this.setState({ nom: e.target.value })
  }

  handleChangePrenom = (e) => {
    this.setState({ prenom: e.target.value })
  }
  render() {

    return (
      <div>

        <form className="bg-light py-5 px-3 container-fluid w-25 mt-5">
          <div className="taille form-group">
            <h5 className='color-black'>Nom</h5>
            <input onChange={this.handleChangeNom} value={this.state.nom} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="taille form-group">
            <h5 className='color-black'>Prenom</h5>
            <input onChange={this.handleChangePrenom} value={this.state.prenom} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          {/* les labels */}

          <div className="form-group">
            <h5 className='color-black'>Cochez vos difficultées</h5>
          </div>

          <div className="row ml-1">
            {this.state.inputs.map((e, i) => {
              return (
                <div key={i} className="form-group form-check p-3">
                  <input onChange={() => this.handleValidate(i)} value={e.value} type="checkbox" className="form-check-input " id="exampleCheck1" />
                  <label className="form-check-label color-black" htmlFor="exampleCheck1">{e.nom}</label>
                </div>

              )
            })}
          </div>

          <button onClick={(e) => this.validate(e)} type="submit" className="btn btn-primary">Connexion</button>
        </form>
      </div>
    );
  }
}
