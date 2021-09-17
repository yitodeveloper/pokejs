import axios from 'axios';
import { BACKEND_BASE_URL } from '../config';

/*
    @description Trae el listado de todos los pokemones
    @params page Número de página (Por defecto trae a todos los pokemones)
*/
export const getAllPokemon = async (page = null) => {
    const offset = page * 5;
    const limit = page ? 5 : 10;

    const response = await axios.get(`${BACKEND_BASE_URL}/pokemon?limit=${limit}${page?`&offset=${offset}`:""}`)

    const {
        results,
        count
    } = response.data;

    const maxPage = Math.round(count / 5);

    return {pokemones: results, count, maxPage};
}


/*
    @description Trae la información de un pókemon
    @params name Nombre o número del pokemon
*/
export const getPokemon = async (name) => {
    
    const response = await axios.get(`${BACKEND_BASE_URL}/pokemon/${name}`)

    return {pokemon: response.data}
}