import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
/* import { GifGriditem } from './GifGridItem'; 
import {getGifs} from '.../helpers/getGifs' */

export const GifGrid = ({category}) => {

 /* const [images,setImages] = useState([]) */
const {loanding} = useFetchGifs(); 

console.log(loanding)

/* useEffect(() => {
    getGifs (category)
    .then (setImgenes);
}, [category]) */

 

    return (
       <>  
        <h3>{category}</h3>
        {loanding? 'cargando...' : 'Fin de carga'}

        {/*  <div className = 'card-grid'>
        
      {
  images.map (img => (
    <GifGridItem 
    key= {img.id}
      {... img}
      />
))
}
        </div> */}
        </>
    )
}