import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async () => {

const url ='https://api.giphy.com/v1/gifs/search?q=shingeki+no+kyojin&limit=10&api_key=Se2sSpMxspDEsJjbs6MxZPa2JgJu6aOe'
const resp = await fetch (url);
const {data}= await resp.json(); 

const gifs = data.map (img => {
    return {
        id:img.id,
        title: img.title,
        url: img.images?.downsized_medium.url

    }
     
    
})

console.log(gifs) 

    }

    getGifs(); 
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
