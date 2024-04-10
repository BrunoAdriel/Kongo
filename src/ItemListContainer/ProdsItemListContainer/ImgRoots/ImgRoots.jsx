import React from 'react'

const ImgRoots = ({imgsRoot}) => {

    return (
    <div className='containerRoot'>
        {imgsRoot.map((img, index)=>(        
        <div key={index} className="card text-bg-white ms-2" >
            <img src={img.src} className="card-img sizeImg img-zoom" alt={img.alt}/>
            <div className="card-img-overlay">
                <h5 className="card-title position-absolute top-50 start-50 translate-middle txtImgRoot fs-3">{img.name}</h5>
            </div>
        </div>
        ))}
    </div> 
)
}

export default ImgRoots

