import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px;

    & img{
        max-width: 300px;
    }
    & p{
        margin-top: 20;
        font-size: 16px;
    }
`;