import { getGalleryData } from "./galeria/datosGaleria";

import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";


//tablas
import deportes from "./tabla/deportes";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case'/galerry2/galleryII.html':
            pageObject = getGallery2Data();
            break;
        case '/index.html':
            pageObject = getHeroData();
            pageObject = {
                ...pageObject,
                ...deportes
            }
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}