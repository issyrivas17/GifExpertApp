import React from 'react' 
import PropTypes from 'prop-types'

    export const GifGridItem = ({id,title,url}) => {
      /*   console.log(id,title,url);  */
        return (
            <div className= "animate__fadeInBottomRight">
            
            
            
            
    <img src={url} alt = {title} />
    <p> {title}  </p>
            </div>
        )
    }

    GifGridItem.protoTypes = {
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired 
    }