import React from 'react'

const ImgRoots = ({imgsRoot}) => {



    return (
    <div className='containerRoot'>
        {imgsRoot.map((img, index)=>(        
        <div key={index} class="card text-bg-white ms-2">
            <img src={img.src} class="card-img sizeImg" alt={img.alt}/>
            <div class="card-img-overlay">
                <h5 class="card-title position-absolute top-50 start-50 translate-middle txtImgRoot fs-3">{img.name}</h5>
            </div>
        </div>
        ))}
    </div>  
)
}

export default ImgRoots