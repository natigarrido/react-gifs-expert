import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ addCategories }) => {

    const [inputState, setInputState] = useState('');

    const handleInputValue = (e) => {
        setInputState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputState.length > 2) {
            addCategories(inputState);
            setInputState('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputState }
                onChange={ handleInputValue } />
        </form>
    )
 
}

AddCategory.propTypes = {
    addCategories: PropTypes.func.isRequired
}

export default AddCategory;