import React, { useRef } from 'react';




export default function Modalconnec() {
    const modal = useRef(null)


    const Disparition = (element) => {
        element.className = ''
    }


    return (

        <div>

            <div ref={modal} class="PopUp">

                <div class="PopUpContenu">

                    <button onClick={() => Disparition({ modal })} class="close">&times;</button>
                    <h2>Mon profil</h2>

                </div>
            </div>
        </div>
    );
}

