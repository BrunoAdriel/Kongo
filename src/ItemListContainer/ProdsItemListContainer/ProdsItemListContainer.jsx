import React from 'react'
import Carrusel from './Carrusel/Carrusel';
import { imagenes } from '../../data/ImgsCarrusel';
import ImgRoots from './ImgRoots/ImgRoots';
import { imgsRoot } from '../../data/ImgsCarrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ProdsItemListContainer = () => {
    return (<>
    <section className='container'>
        <h1 className='CentradoTitulos' >PRODUCTOS</h1>
        <Carrusel imagenes={imagenes}/>
        <ImgRoots imgsRoot={imgsRoot}/>
        </section>
        </>);
};

export default ProdsItemListContainer;




