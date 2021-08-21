import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const initialData = {
        data: [],
        loading: true
    }

    const [state, setState] = useState(initialData);

    useEffect( () => {
        getGifs(category).then(gifs => setState({
            data: gifs,
            loading: false
        }));
    }, [category] );


    return state;
}