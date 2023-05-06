import { useState } from 'react';
import { AddCategroy } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Led Zeppelin']);

  const onAddCategory = (newCategory) => {

      if (categories.includes(newCategory)) return;
      //console.log(newCategory)
      //categories.push(newCategory);
      setCategories( [ newCategory, ...categories] )
  }
 
  return ( 
    <>
      <h1>GifExpertApp</h1>

  
      <AddCategroy 
        onNewCategory={ (value) => (onAddCategory) (value) } />

        { 
          categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category }/>
          ))
        }
    </>
  )
}
