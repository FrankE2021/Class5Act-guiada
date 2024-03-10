import React from 'react'

function Cena({reyes}) {
  const url="http://www.html6.es/img/rey_";
const resultado=reyes.map(e => 
<div key={e.nombre} className="rey">
  <span className='etiqueta'>{e.nombre.toUpperCase()}</span> ha comido {e.reinado*e.vacasComidas*365} vacas en sus {e.reinado} años de reinado.
  <img src={url+e.nombre.toLowerCase()+".png"}/>
  </div>)

  return <>
    {resultado}  
    </>;
}

export default Cena
