import React, { useEffect, useRef } from 'react';
import ImgItemList from './ImgItemList';
import ProdsItemListContainer from './ProdsItemListContainer/ProdsItemListContainer';
import Ofertas from './Ofertas/Ofertas';

export const ItemListContainer = () => {
    const imgItemListRef = useRef(null);

    useEffect(() => {
        // Establecer el enfoque en ImgItemList cuando la página se monte
        if (imgItemListRef.current) {
            imgItemListRef.current.focus();
        }
    }, []);

    return (
        <>
            <ImgItemList ref={imgItemListRef} />
            <ProdsItemListContainer />
            <Ofertas />
        </>
    );
};
