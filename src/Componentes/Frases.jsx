//STYLOS
import "./Frases.css"

import React from 'react'

const Frases = ( {Quote , Autor , ChangeUser, background}) => {
    return (
        <div className="Card">
            <h2>"{Quote}"</h2>
            <h3>{Autor}</h3>
            <button onClick={ChangeUser} style={{background}}><i className="fas fa-random"></i></button>
        </div>
    )
}

export default Frases
