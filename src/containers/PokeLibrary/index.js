import React, { useEffect, useState } from 'react';
import {getAllPokemon} from '../../utils/api';
import Loading from '../../components/Loading'
import AppLayout from '../../components/AppLayout';
import { Pagination } from '@mui/material';
import PokemonCard from '../../components/PokemonCard';
import PokemonList from '../../components/PokemonList';
import PokemonGoal from '../../components/PokemonGoal';
import { useAudio } from '../../utils/hooks';


const PokeLibrary = () => {

    const [pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [showData, setShowData] = useState(false);
    const [score, setScore] = useState(0);
    const [hiddenPokemon, setHiddenPokemon] = useState(null);
    const [playingWin, toggleWin] = useAudio("/win.wav")
    const [playingError, toggleError] = useAudio("/error.wav")
    const [playingBackground, toggleBackground, enableloop] = useAudio("/background.wav")

    useEffect(() => {
        getData();
    }, [currentPage]);

    const getData = async () => {
        setLoading(true);
        const {pokemones, maxPage} = await getAllPokemon(currentPage);
        const index = Math.round(Math.random()*pokemones.length);
        const seleccionado = pokemones[index >= pokemones.length ? index - 1: index];
        console.log(pokemones, seleccionado, index);
        setHiddenPokemon(seleccionado)
        setLoading(false);
        setPokemones(pokemones);
        setMaxPage(maxPage);
    }

    const onChangePage = (evt, value) => {
        setCurrentPage(value);
    }

    const onSelectCandidate = (candidate) => {

        if(candidate.name === hiddenPokemon.name){
            setScore(score + 1);
            toggleWin();
        }else{
            setScore(score - 2);
            toggleError();
        }

        if(!playingBackground){
            enableloop();
            toggleBackground();
        }

        setTimeout(() => {
            const newPage = Math.round(Math.random() * maxPage);
            setCurrentPage(newPage);
        }, 1000)
        
    }

    if(loading){
        return <Loading message="Obteniendo pokemones desde nuestro servidores" />
    }

    return (
        <AppLayout>
            {
                hiddenPokemon &&
                <PokemonGoal name={hiddenPokemon.name} score={score}/>
            }
            
            <PokemonList>
                {
                    pokemones.map((p) => 
                    <PokemonCard 
                        onSelectCandidate={onSelectCandidate} 
                        showData={showData} 
                        pokemon={p} 
                        key={`poke-${p.name}`}
                    />)
                }
            </PokemonList>
            {/* <Pagination page={currentPage} count={maxPage} size="large" onChange={onChangePage}/> */}
            
        </AppLayout>
    )
}

export default PokeLibrary;