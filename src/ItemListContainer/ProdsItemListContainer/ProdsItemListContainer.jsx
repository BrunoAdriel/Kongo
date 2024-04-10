import React from 'react';
import Carrusel from './Carrusel/Carrusel';
import imagenes from '../../data/ImgsCarrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ProdsItemListContainer = () => {
    return (
        <>
            <section className="container">
                <h1 className="CentradoTitulos">PRODUCTOS</h1>
                <Carrusel imagenes={imagenes}>
                    {imagenes.map((imagen, index) => (
                        <div key={index}>
                            <p>{imagen.name}</p>
                            <p>${imagen.price}</p>
                        </div>
                    ))}
                </Carrusel>
            </section>
        </>
    );
};

export default ProdsItemListContainer;






{/* <p>{imagenes[imageIndex].name}</p>
<p>${imagenes[imageIndex].price}</p>
<section className='cuotasDeDescuento'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
    </svg>
    <p>Hasta 6 coutas sin interes de $"{precioDividio}</p>
</section> */}



