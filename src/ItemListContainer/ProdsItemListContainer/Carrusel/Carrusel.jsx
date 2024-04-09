import React, { useState } from 'react';

const Carrusel = ({ imagenes }) => {
    const [visibleStartIndex, setVisibleStartIndex] = useState(0);

    const next = () => {
    setVisibleStartIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
};

    const prev = () => {
    setVisibleStartIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
};

return (
        <div id="miCarrusel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        {[0, 1, 2, 3].map((offset) => {
                        const imageIndex = (visibleStartIndex + offset) % imagenes.length;
                        return (
                            <div className="col" key={imageIndex}>
                            <img src={imagenes[imageIndex].src} className="d-block w-100" alt={imagenes[imageIndex].alt} />
                            </div>
                        );
                        })}
                    </div>
                </div>
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
