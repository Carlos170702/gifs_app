import { useState } from "react";
import { PropTypes } from "prop-types";

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
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar gift"
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}