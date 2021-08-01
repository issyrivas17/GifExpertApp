import { useState,useEffect } from "react"; 
import {getGifs} from '../helpers/getGifs'; 

export const useFetchGifs = (category) => {

const [state, setstate] = useState(
    {
        data:[],
        loanding:true
    }); 
    
    useEffect (() => { 
setTimeout(() => {
    getGifs(category )
    .then(img => {
        setstate ({
            data:[1,2,3,4,5,6,7],
            loanding:false
        })
    },3000)
     })    
    },[category]);

    return state; 




}
