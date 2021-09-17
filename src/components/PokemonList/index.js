import React from 'react';
import { PokemonListContainer } from './styled';

const PokemonList = (props) => (
    <PokemonListContainer>
        {props.children}
    </PokemonListContainer>
)

export default PokemonList;