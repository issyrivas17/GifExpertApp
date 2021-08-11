    import React from 'react'
    import { useFetchGifs } from '../Hooks/useFetchGifs';
    import {GifGridItem} from '../components/GifGridItem'

        export const GifGrid = ({category}) => {

        const {data:images,loading } =useFetchGifs(category); 

        
            return (
            <>  
                <h3 className="animate__wobble">{category}</h3> 
        
                {loading && <p className="animate__flash"loading></p>}  
                <div className = 'card-grid'>
            
                {
            images.map (img => (
                <GifGridItem 
                key={img.id}
                {... img} />
                ))
            }
                    </div> 
                    </>
                )
        }