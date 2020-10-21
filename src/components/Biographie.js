import React from 'react';

export default class Biographie extends React.Component{
render(){
return(
    <div className="container bg-light">
        <div className="row m-0">
            <div className="col-6">
                <div className="text-center">
                    <img src="../img/mauve.jpg" className="image1"/>
                </div>
            </div>
            <div className="col-6 p-5 pr">
                <div className="present p-2 d-flex justify-content-center align-items-center">
                    <p>
                    Tu gères tes mediaqueries ou ton référencement SEO comme personne ? Mais à l'inverse tu n'as rien compris à react ou ne parviens pas à trouver ta ligne éditoriale pour ton nouveau projet ? 
                    Parce que deux cerveaux en valent mieux qu'un, on a décidé d'en combiner six pour les mettre à ton service !
                    Tu le sais, Molengeek ne jure que par l'entraide, alors on a voulu pousser la, on dira même <i>the</i>, <span id="span1" className="text-white p-1"><i>perfection</i></span>   encore plus loin : on te propose de t'inscrire en ligne et d'élever ton apprentissage un cran plus haut. 
                    
                    </p>
                </div>
            </div>
            
        </div>

        <div className="row flex-row-reverse m-0">
            <div className="col-6">
                <div>
                    <img src="../img/flocoeur.jpg" alt=""/>
                </div>
            </div>
            <div className="col-6 p-5 pr">
                <div className="present p-3 d-flex justify-content-center align-items-center">
                    <p>
                    "Montre moi comment tu codes, je te dirai qui tu es". Non, on plaisante, par contre on va te montrer avec qui tu peux être le plus <span id="span2" className="text-white p-1 mr-1"> <i>Fast & Furious  </i>  ! </span> 
                    Crée ton profil, liste tes points forts et tes points faibles, on se charge de te trouver les compagnons d'étude parfaits pour toi !
                    Pour le reste, à vous de jouer !
                    </p>
                </div>
            </div>
            
        </div>

       
    </div>
)
}
}