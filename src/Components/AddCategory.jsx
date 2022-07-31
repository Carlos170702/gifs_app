import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

    //funcion de el Input con la onChange
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    //funcion de el form con la onSubmit
    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onAddCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar gift"
                onChange={onInputChange}
            />
        </form>
    )
}
