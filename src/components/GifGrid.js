import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

 const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            <p className="animate__animated animate__flash">{loading && 'Loading...'}</p>
            <div className="card-grid">
                { images.map( (gif) => <GifGridItem key={gif.id} {...gif} /> ) }
            </div>
        </>
    )
 }

 export default GifGrid;