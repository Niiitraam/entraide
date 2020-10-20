import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const Profil = () =>{
    
    const [profil, setProfil] = useState([
        {id: 1, nom: 'Gang', prenom: 'Yassine', pointFort: ['CSS', 'reactJs'], pointFaible: [], remediation: 'HTML'},
        {id: 1, nom: 'Elgouchi', prenom: 'Mohamed', pointFort: [], pointFaible: [], remediation: 'CSS'},
        {id: 1, nom: 'Vandendroos', prenom: 'Valentine', pointFort: [], pointFaible: [], remediation: 'Javascript'},        
    ])

    const liste = profil.map(elements =>{
        return(
        <li className='li-profil border p-3 m-3' key={elements.profil}><span>Nom: {elements.nom}</span>Prénom: {elements.prenom}<span></span>Point fort: {elements.pointFort}<span>Point faible: {elements.pointFaible}</span><span>Remédiation: {elements.remediation}</span></li>
        )
    })

    const addNewProfil= (newProfil) =>{
        setProfil([...profil, {
            id: uuid(),
            profil: newProfil
        }
        ])
    }

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