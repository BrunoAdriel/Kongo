import React from 'react'

const ImgItemList = () => {

return (
    <div className='ContainerImg'>
        <img src='https://acdn.mitiendanube.com/stores/219/431/themes/rio/2-slide-1712347571890-315757358-2a971e185c98f2791af9ed2915baaf371712347573-1920-1920.webp?1574457746' alt='Imagen de presentacion de la pagina' className='ImgItemContainer'/>
        

        <section className='PieImgContainer'>
            <div className='ItemsPieImg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="LogoPie" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
            </svg>
                <div className=''>
                    <h4>Envíos gratis</h4>
                    <p>En conmpras que superen $100.000</p>
                </div>
            </div>
            <div className='ItemsPieImg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="LogoPie" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
                <div className=''>
                    <h4>Pagá hasta 6 cuotas sin interés</h4>
                    <p>Con tarjeta de crédito bancaria</p>
                </div>
            </div>
            <div className='ItemsPieImg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  className="LogoPie" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                </svg>
                <div className=''>
                    <h4>Comprá de forma segura</h4>
                    <p>Protegemos tus datos</p>
                </div>
            </div>
        </section>
    </div>
)
}

export default ImgItemList