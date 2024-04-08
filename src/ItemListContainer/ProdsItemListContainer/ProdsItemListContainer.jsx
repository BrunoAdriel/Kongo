import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Para los estilos
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Para funcionalidades de JS como el carrusel

const ProdsItemListContainer = () => {
    return (<>
    <section className='container'>
        <h1>PRODUCTOS</h1>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col">
                            <section>
                                <img src="https://acdn.mitiendanube.com/stores/219/431/products/2480pawb-98b872736464cbc16917123476687234-480-0.webp" className="d-block w-100" alt="..."/>
                                <p>Parachute Wash Black</p>
                                <p>$89.990</p>
                                <section className='descuento'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card mx-2" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                    </svg>
                                <p>6 coutas sin interes </p>
                                </section>
                            </section>
                        </div>
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/2420skul-911ac46cd6eb97e6bb17123476520953-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/2420cult-03d75cec131074bf8d17123476174491-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/2412pray-75434d6faca56aa21217123475134734-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/2420ohow-41383c03fd27a4a07817123476407372-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/2413bawi-c0602e8fd42264106c17123475707080-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/2413krel-a9930cba48ad70e88a17123475810984-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col">
                            <img src="https://acdn.mitiendanube.com/stores/219/431/products/74d8d7c0-0dbe-44e0-80f7-79dd3946f148-4e7916f4b6360eeb1017123530944919-480-0.webp" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </section>
        </>);
};

export default ProdsItemListContainer;







