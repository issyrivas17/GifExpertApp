import { shallowToJson } from "enzyme-to-json"; 
import {GifGridItem}  from '../../components/GifGridItem'
import React from 'react' 


describe('Pruebas en <GifGridItem/>', () => { 

    const title= 'Un titulo' 
    const url= "https://localhost//algo.jpg" 

    test('Debe de mostrar el componente correctamente', () => { 
       
        const wrapper = shallowToJson(<GifGridItem title ={title} url={url}/>); 
        expect(wrapper).toMatchSnapshot(); 
        
    })
    
    
        

        expect(title)
        
    
    
    
});
