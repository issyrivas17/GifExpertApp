import { useState } from "react";

export const useFetchGifs = () => {
const [state, setstate] = useState(
    {
        data:[],
        loanding:true
    }); 

    setTimeout(() => {
        setstate({
            data:[1,2,3,4,5,6,7],
            loanding: false
        })
    }, 3000);

    return state; 




}
