import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategroy = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState(' ')

    const onImputChange = ({ target }) => {
        setInputValue ( target.value )
        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        //setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() ); 
    }

    return (
      <form onSubmit={ (event) => onSubmit(event)}>
          <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={ onImputChange }
          />
      </form>
    )
  }
