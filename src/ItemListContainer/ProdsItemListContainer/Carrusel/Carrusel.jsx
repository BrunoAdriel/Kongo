import React, { useState } from 'react';

const Carrusel = ({ imagenes }) => {
    const [visibleStartIndex, setVisibleStartIndex] = useState(0);
    const [focusButton, setFocusButton] = useState(null)

    const next = () => {
        setVisibleStartIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    const prev = () => {
        setVisibleStartIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
    };

    const mouseOver = (index) =>{
        setFocusButton(index)
    }

    const mouseLeave = ()=>{
        setFocusButton(null)
    }

    return (
        <div className="carrusel-container">
            <div className="carrusel-wrapper">
                {[0, 1, 2, 3].map((offset) => {
                    const imageIndex = (visibleStartIndex + offset) % imagenes.length;
                    const CalcularPrecio = (precio) =>{
                        return (precio / 6).toFixed(2)
                    }                
                    const precioProd = imagenes[imageIndex].price
                    const precioDividio = CalcularPrecio(precioProd)

                    return (
                        <div className="carrusel-item" key={imageIndex}
                            onMouseEnter={() => mouseOver(imageIndex)}
                            onMouseLeave={mouseLeave}
                        >
                            <img src={imagenes[imageIndex].src} alt={imagenes[imageIndex].alt} />
                            <div className="carrusel-caption">
                                <p>{imagenes[imageIndex].name}</p>
                                <p>${imagenes[imageIndex].price}</p>
                                <section className='cuotasDeDescuento'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                                    </svg>
                                    <p>Hasta 6 coutas sin interes de $"{precioDividio}</p>
                                </section>
                                { focusButton === imageIndex && (
                                <div className="SpaceButtons">
                                    <button className='btn btn-dark'>Comprar</button>
                                    <button className='btn btn-secondary'>Ver mas!👀</button>
                                </div>
                            )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control-prev" type="button" onClick={prev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" onClick={next}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
};

export default Carrusel;
