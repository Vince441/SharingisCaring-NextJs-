"use client"
import React from 'react'

function Formulaire() {

    const HandleAlert = () => {
        alert("Message Envoyé")
    }

  return (
    <>
    <div className="Titre_formulaire">
        <div className="bloc_formulaire small">
          <div className="trait1"></div>
        </div>
        <div className="bloc_formulaire medium">
          <p>Contact</p>
        </div>
        <div className="bloc_formulaire large">
          <div className="trait1"></div>
        </div>
      </div>
      <div className='Container_form'>
    <div className='form'>
        <h1>Contactez-nous</h1>
    <form className='gap'>
      <div>
        <label htmlFor="firstName">Prénom:</label><br></br>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Nom:</label><br></br>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div>
        <label htmlFor="email">Email:</label><br></br>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label><br></br>
        <textarea id="message" name="message" />
      </div>
      <button onClick={HandleAlert} type="submit">Envoyer</button>
    </form>
    </div>

      </div>
    </>
  )
}

export default Formulaire