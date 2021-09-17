import { lightGreen } from "@mui/material/colors";
import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;
    align-items: center;

    & .puntuation-title{
        font-size: 14px;
        margin: 0;
    }
    & .puntuation{
        margin: 0;
        font-size: 40px;
        margin-bottom: 40px;
    }

    & .title{
        margin: 0;
        font-size: 20px;
        font-weight: 400;

        & .name{
            color: ${lightGreen[500]};
            font-size: 26px;
            text-transform: capitalize;
        }
    }

    & .subtitle{
        margin: 0;
        margin-top: 10px;
        margin-bottom: 80px;
    }
`;

const PokemonGoal = ({name, score}) => {
    return (
        <Container>
            <p className="puntuation-title">Puntos Actuales</p>
            <p className={"puntuation"}>{score}XP</p>
            <p className="title">Demuestra que conoces a <span className="name">{name}</span></p>
            <p className="subtitle">+1XP si ganas o -2XP si pierdes</p>
        </Container>
    )
}

export default PokemonGoal;