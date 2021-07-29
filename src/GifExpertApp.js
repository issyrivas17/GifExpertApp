import React,{useState}from 'react';

const GifExpertApp = () => {  

    /* const categories = ['One Punch','Samurai X','Dragon Ball'];  */
const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']); 

const handleAdd = () => {
setCategories([...categories,'Sailor Moon'])
}
  return <> 
  <h2>GitExpertApp</h2> 
  <hr/> 
  <button onClik={handleAdd}>Agregar</button>


  <ol>
   {categories.map( category => {
       return <li key= {category}> {category}</li>
   }
    )}
  </ol>
  </>; 

}; 

export default GifExpertApp; 