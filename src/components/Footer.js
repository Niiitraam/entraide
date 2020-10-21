import React from 'react';

export default class  extends React.Component{
render(){
return(
<div>
    <footer>
        <div className="row mt-5 p-0 m-0">
            <div className="col-4 u m-auto">
            <div className="d-flex justify-content-center align-items-center p-5">
                    <h1 className="text-white">Molengeek</h1>
                </div>
            </div>
            <div className="col-4" id="mauvee">
                <div>
                    <img src="../img/logo8.jpg" className="img-fluid"/>
                </div>
            </div>
            <div className="col-4 u m-auto">

                <div className="liste">
                   <span className="text-white">
                   &copy;Anis 	&copy;Abdel  &copy;Oussama &copy;Misano 	&copy;Martin 	&copy;Kadri
                   </span>
                </div>
            </div>
        </div>
    </footer>
</div>
)
}
}