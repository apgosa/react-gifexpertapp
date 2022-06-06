import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // useEffect sirve para ejecutar una sola vez o condicionar la ejecución del getGifs.
    useEffect(() => {
        
        getGifs(category).then(imgs => setState({
            data: imgs,
            loading: false
        }));
    }, [category]);


    return state;
}