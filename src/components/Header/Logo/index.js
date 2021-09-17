import { Avatar } from '@material-ui/core';
import React from 'react';
import { LogoContainer } from './style';

const Logo = () => {

    return (
        <LogoContainer>
            <Avatar src={"/icon.png"}/>
            <h1 className="title">PokeJS</h1>
            <h2 className="subtitle">Para los amantes de los pokemones y javascript.</h2>
        </LogoContainer>
    )
}

export default Logo;