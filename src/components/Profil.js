import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

const Profil = ({personne}) =>{

    const [profil, setProfil] = useState([
        {id: 1, nom: 'Gang ', prenom: 'Yassine ', pointFort: ['CSS'], remediation: [' HTML','reactJs']},
        {id: 2, nom: 'Elgouchi ', prenom: 'Mohamed ', pointFort: ['HTML'], remediation: ['reactJs', 'CSS']},
        {id: 3, nom: 'Vandendroos ', prenom: 'Valentine ', pointFort: ['reactJs'], remediation: ['HTML', 'CSS']},
        {id: 4, nom: 'Boulanger ', prenom: 'Loick', pointFort: ['reactJs','HTML '], remediation: ['CSS']},
        {id: 5, nom: 'MonkeyD', prenom: 'Luffy', pointFort: ['reactJs','CSS'], remediation: ['HTML']},
        {id: 6, nom: 'Seyour', prenom: 'Rashid', pointFort: ['CSS','HTML '], remediation: ['reactJs']},
    ])

    const liste = profil.map(elements =>{
        return(
        <li className='li-profil border; width:30' id="liste" key={elements.profil}>
            <div className='utilisateur'>
            <img src="./img/t2.jpg" alt=""/>
            </div>
            <span>Nom: {elements.nom} {elements.prenom}</span><span>Point fort: {elements.pointFort}</span><span> Remédiation: {elements.remediation}</span>
            <button className='btn-li'>Contactez</button>
        </li>
        )
    })

    return(
        <div>
            <h2 className='text-center mt-4'>Profil</h2>
            <ul className='li-placement'>
                {liste}
            </ul>

        </div>
    )
}

export default Profil