import React from 'react'

    export const GifGridItem = ({id,title,url}) => {
      /*   console.log(id,title,url);  */
        return (
            <div className= "animate__fadeInBottomRight">
            
            
            
            
    <img src={url} alt = {title} />
    <p> {title}  </p>
            </div>
        )
    }
