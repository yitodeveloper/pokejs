import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/api";
import { PokemonCardContainer } from "./style";

const PokemonCard = ({pokemon, showData, onSelectCandidate}) => {

    const [poke, setPoke] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const poke = await getPokemon(pokemon.name);
        setPoke(poke.pokemon);
    }

    return (
        <PokemonCardContainer>
            <Card>
                <CardActionArea onClick={() => onSelectCandidate(poke)}>
                {
                    poke &&
                    <CardMedia 
                        component="img"
                        height="140"
                        image={poke.sprites.front_default}
                    />
                }
                {
                    showData &&
                    <CardContent>
                        <p style={{textAlign: "center", fontSize: 18}}>{pokemon.name}</p>
                    </CardContent>
                }
                </CardActionArea>
            </Card>
        </PokemonCardContainer>
    )
}

export default PokemonCard;