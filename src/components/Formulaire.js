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
      { id: 1, nom: 'Gang ', prenom: 'Yassine ', pointFort: ['CSS'], remediation: [' HTML', 'reactJs'] },
      { id: 2, nom: 'Elgouchi ', prenom: 'Mohamed ', pointFort: ['HTML'], remediation: ['reactJs', 'CSS'] },
      { id: 3, nom: 'Vandendroos ', prenom: 'Valentine ', pointFort: ['reactJs'], remediation: ['HTML', 'CSS'] },
      { id: 4, nom: 'Boulanger ', prenom: 'Loick', pointFort: ['HTML', 'reactJs'], remediation: ['CSS'] },
      { id: 5, nom: 'MonkeyD', prenom: 'Luffy', pointFort: ['reactJs', 'CSS'], remediation: ['HTML'] },
      { id: 6, nom: 'Seyour', prenom: 'Rashid', pointFort: ['CSS', 'HTML '], remediation: ['reactJs'] },
    ]

    for (let i = 0; i < x.inputs.length; i++) {
      if (x.inputs[i].validate === true) {
        personne.pointFort.push(x.inputs[i].nom)

      } else {
        personne.remediation.push(x.inputs[i].nom)
      }
    }
    // let alkdlk = personnes.remediation.split('')

    console.log(personnes[2].remediation.toString());
    console.log(personne.pointFort.toString());

    if(personne.remediation.toString() === personnes[0].pointFort.toString()) {
      console.log('salut')
    }else if(personne.remediation.toString() === personnes[1].pointFort.toString()) { 
      console.log('abdel')
    }else if(personne.remediation.toString() === personnes[2].pointFort.toString()) {
      console.log('ouss');
    }else if(personne.remediation.toString() === personnes[3].pointFort.toString()) {
      console.log('ka');
    }else if(personne.remediation.toString() === personnes[4].pointFort.toString()) {
      console.log('misano');
    }else if(personne.remediation.toString() === personnes[5].pointFort.toString()) {
      console.log('anis');
    }





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

        <form className="bg-light p-3 container-fluid w-25 mt-5">
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
            return (
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
      </div>
    );
  }
}
