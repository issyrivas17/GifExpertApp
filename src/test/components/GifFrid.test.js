import { shallowToJson } from "enzyme-to-json"; 
import {GifGridItem}  from './components/GifGridItem' 
import React from 'react' 


describe('Pruebas en <GifGridItem/>', () => {

    test('Debe de mostrar el componente correctamente', () => { 
       
        const wrapper = shallowToJson(<GifGridItem/>)
        
    })
    
    
});
