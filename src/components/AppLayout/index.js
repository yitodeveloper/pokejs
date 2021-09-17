import React from 'react';
import { LayoutContainer } from './style';

const AppLayout = (props) => {

    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    )
    
}

export default AppLayout;