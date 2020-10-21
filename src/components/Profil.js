import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

const Profil = () => {

    const [profil, setProfil] = useState([
        { id: 1, nom: 'Gang ', prenom: 'Yassine ', pointFort: ['CSS ', 'reactJs '], remediation: [' HTML'] },
        { id: 2, nom: 'Elgouchi ', prenom: 'Mohamed ', pointFort: ['HTML '], remediation: [] },
        { id: 3, nom: 'Vandendroos ', prenom: 'Valentine ', pointFort: ['JS ', 'HTML '], remediation: [] },
        { id: 4, nom: 'MonkeyD ', prenom: 'Luffy ', pointFort: ['JS ', 'HTML '], remediation: ' JS' },
        { id: 5, nom: 'Seyour ', prenom: 'Rashid ', pointFort: ['JS ', 'HTML '], remediation: ' JS' },
        { id: 6, nom: 'Boulanger ', prenom: 'Grégoir ', pointFort: ['JS ', 'HTML '], remediation: ' JS' },
    ])

    const liste = profil.map(elements => {
        return (
            <li className='li-profil border; width:30' id="liste" key={elements.profil}>
                <div className='utilisateur'>
                    <img src="./img/t2.jpg" alt="" />
                </div>
                <span>Nom: {elements.nom} {elements.prenom}</span><span>Point fort: {elements.pointFort}</span><span> Remédiation: {elements.remediation}</span>
                <button className='btn-li'>S'inscrire</button>
            </li>
        )
    })

    return (
        <div className='bg-light'>
            <h2 className='text-center mt-4'>Profil</h2>
            <ul className='li-placement'>
                {liste}
            </ul>

        </div>
    )
}

export default Profil