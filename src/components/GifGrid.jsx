import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
    <> 
        <h3>{ category }</h3>
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
        </div>
    </>
    )
}
