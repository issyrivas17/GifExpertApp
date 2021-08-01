    import React from 'react'
    import { useFetchGifs } from '../Hooks/useFetchGifs';
    import {GifGridItem} from '../components/GifGridItem'


    export const GifGrid = ({category}) => {

    const {data,loanding} = useFetchGifs(category); 

        return (
        <>  
            <h3>{category}</h3>
           {loanding && <p>loanding</p>} 
            

            <div className = 'card-grid'>
            
        {
    data.map (img => (
        <GifGridItem key= {img.id}{... img} />))
    }
            </div> 
            </>
        )
    }