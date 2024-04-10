import React from 'react'
import CarrucelOfertas from './CarrucelOfertas/CarrucelOfertas'
import { imgsOferta } from '../../data/ImgsCarrusel'

const Ofertas = () => {
return (<>
    <div className='container'>
        <section className='line'></section>
        <h1 className='CentradoTitulos'>OFERTAS</h1>
        <CarrucelOfertas imagenes={imgsOferta}/>
    </div>
</>)
}

export default Ofertas