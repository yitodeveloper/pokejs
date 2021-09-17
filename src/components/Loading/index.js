import React from 'react';
import { LoadingContainer } from './style';

const Loading = ({message}) => {

    return (
        <LoadingContainer>
            <img src="/animate.gif"/>
            <p>{message}</p>
        </LoadingContainer>
    )
}

export default Loading;