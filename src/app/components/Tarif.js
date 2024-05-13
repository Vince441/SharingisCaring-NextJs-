import React from 'react'

function Tarif() {
  return (
    <div className='container_tarif'>
    <div className="Titre_tarif">
        <div className="bloc_tarif small">
          <div className="trait1"></div>
        </div>
        <div className="bloc_tarif medium">
          <p>Tarifs</p>
        </div>
        <div className="bloc_tarif large">
          <div className="trait1"></div>
        </div>
      </div>
      <div className="card_tarif">
<div className='card card-1'>
<h1>FORFAIT <br></br> Demi-journée</h1>
<p>15€ <span>+ 5/repas</span></p>




</div>
<div className='card card-2'>
<h1>FORFAIT <br></br> Journée</h1>
<p>25€ <span>+ 5/repas</span></p>
</div>
<div className='card card-3'>
<h1>FORFAIT <br></br> Semaine</h1>
<p>115€ <span>+ 5/repas</span></p>
</div>
      </div>
      </div>
  )
}

export default Tarif