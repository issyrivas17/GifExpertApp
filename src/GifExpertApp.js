import React,{useState}from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {  

const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']); 

/* const handleAdd = () => {
setCategories([...categories,'Sailor Moon'])

} */
  return <> 
  <h2>GitExpertApp</h2> 
  <AddCategory/>
  <hr/> 
  


  <ol>
   {categories.map( category => {
       return <li key= {category}> {category}</li>
   }
    )}
  </ol>
  </>; 

}; 

export default GifExpertApp; 