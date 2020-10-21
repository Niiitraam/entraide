import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const Profil = () =>{
    
    const [profil, setProfil] = useState([
        {id: 1, nom: 'Gang ', prenom: 'Yassine ', pointFort: ['CSS ', 'reactJs '], pointFaible:['HTML'],remediation: [' HTML']},
        {id: 2, nom: 'Elgouchi ', prenom: 'Mohamed ', pointFort: ['HTML '],pointFaible:['CSS'], remediation: ' CSS'},
        {id: 3, nom: 'Vandendroos ', prenom: 'Valentine ', pointFort: ['JS ','HTML '],pointFaible:['JS'], remediation: ' JS'},        
    ])

    const liste = profil.map(elements =>{
        return(
        <li className='li-profil border p-3 m-3 ; width:30' id="liste" key={elements.profil}><span>Nom: {elements.nom}</span>Prénom: {elements.prenom}<span></span>Point fort: {elements.pointFort}<span>Point faible: {elements.pointFaible}</span><span> Remédiation: {elements.remediation}</span></li>
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