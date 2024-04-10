import React, { useState } from 'react';

const Carrusel = ({ imagenes, children}) => {
    const [visibleStartIndex, setVisibleStartIndex] = useState(0);
    const [focusButton, setFocusButton] = useState(null);

    const next = () => {
        setVisibleStartIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    const prev = () => {
        setVisibleStartIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
    };

    const mouseOver = (index) => {
        setFocusButton(index);
    };

    const mouseLeave = () => {
        setFocusButton(null);
    };

    return (
        <div className="carrusel-container">
            <div className="carrusel-wrapper">
                {[0, 1, 2, 3].map((offset) => {
                    const imageIndex = (visibleStartIndex + offset) % imagenes.length;
                    return (
                        <div
                            className="carrusel-item"
                            key={imageIndex}
                            onMouseEnter={() => mouseOver(imageIndex)}
                            onMouseLeave={mouseLeave}
                        >
                            <img src={imagenes[imageIndex].src} alt={imagenes[imageIndex].alt} />
                            <div className="carrusel-caption">
                                {children}
                                {focusButton === imageIndex && (
                                    <div className="SpaceButtons">
                                        <button className="btn btn-dark">Comprar</button>
                                        <button className="btn btn-secondary">Ver mas!👀</button>
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
