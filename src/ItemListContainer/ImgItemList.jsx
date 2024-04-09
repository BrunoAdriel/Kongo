import React from 'react'
import { useEffect, useRef } from 'react';

const ImgItemList = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
        }},{
            root: null, // observa cambios en relación al viewport
            rootMargin: '0px',
            threshold: 0.5, // se dispara cuando el 10% del elemento está visible
        }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }};
    }, []);

return (
    <div className='ContainerImg'>
        <img src='https://acdn.mitiendanube.com/stores/219/431/themes/rio/2-slide-1712347571890-315757358-2a971e185c98f2791af9ed2915baaf371712347573-1920-1920.webp?1574457746' alt='Imagen de presentacion de la pagina' className='ImgItemContainer'/>
        <section ref={sectionRef} className='PieImgContainer'>
            <div className='ItemsPieImg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="LogoPie bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                </svg>
                <div>
                    <h4>Envíos gratis</h4>
                    <p>En conmpras que superen $100.000</p>
                </div>
            </div>
            <div className='ItemsPieImg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="LogoPie bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
                <div>
                    <h4>Pagá hasta 6 cuotas sin interés</h4>
                    <p>Con tarjeta de crédito bancaria</p>
                </div>
            </div>
            <div className='ItemsPieImg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="LogoPie bi bi-database-lock" viewBox="0 0 16 16">
                    <path d="M13 5.698a5 5 0 0 1-.904.525C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777A5 5 0 0 1 3 5.698V7c0 .374.356.875 1.318 1.313C5.234 8.729 6.536 9 8 9c.666 0 1.298-.056 1.876-.156-.43.31-.804.693-1.102 1.132A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777A5 5 0 0 1 3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12h.027a4.6 4.6 0 0 0-.017.8A2 2 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777A5 5 0 0 1 3 11.698V13c0 .374.356.875 1.318 1.313C5.234 14.729 6.536 15 8 15c0 .363.097.704.266.997Q8.134 16.001 8 16c-1.573 0-3.022-.289-4.096-.777C2.875 14.755 2 14.007 2 13V4c0-1.007.875-1.755 1.904-2.223C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4v4.256a4.5 4.5 0 0 0-1.753-.249C12.787 7.654 13 7.289 13 7zm-8.682-3.01C3.356 3.124 3 3.625 3 4c0 .374.356.875 1.318 1.313C5.234 5.729 6.536 6 8 6s2.766-.27 3.682-.687C12.644 4.875 13 4.373 13 4c0-.374-.356-.875-1.318-1.313C10.766 2.271 9.464 2 8 2s-2.766.27-3.682.687Z"/>
                    <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
                </svg>
                <div>
                    <h4>Comprá de forma segura</h4>
                    <p>Protegemos tus datos</p>
                </div>
            </div>
        </section>
    </div>
)
}

export default ImgItemList