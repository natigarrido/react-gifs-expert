import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const initialCategories = ['One Punch'];

    const [categories, setCategories ] = useState(initialCategories);

    const handleAdd = (newCategory) => {
        setCategories([newCategory, ...categories]);
    } 

    return (
        <>
            <h1>GifExpertApp</h1>            
            <AddCategory addCategories={ handleAdd }/>
            <hr />
            {
                categories.map(category => 
                    <GifGrid key={category} category={ category }/>
                )
            }
        </>
    )
};

export default GifExpertApp;