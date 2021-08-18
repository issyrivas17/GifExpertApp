import { shallowToJson } from "enzyme-to-json"; 
import {GifGridItem}  from '../../components/GifGridItem'
import React from 'react' 


describe('Pruebas en <GifGridItem/>', () => { 

    const title= 'Un titulo' 
    const url= "https://localhost//algo.jpg" 
    const wrapper = shallowToJson(<GifGridItem title ={title} url={url}/>);

    test('Debe de mostrar el componente correctamente', () => { 
       
        expect(wrapper).toMatchSnapshot(); 
        
    }) 
    
    test('Debe de tener un parrafo con el title', () => { 
        
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);
            
    })
    
    
        

    
        
    
    
    
});
