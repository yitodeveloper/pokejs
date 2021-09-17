import { yellow } from "@material-ui/core/colors";
import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    & .MuiAvatar-root{
        width: 80px;
        height: 80px;
    }

    & .title{
        color: ${yellow[500]};
        font-size: 30px;
        margin: 0;
    }

    & .subtitle{
        color: white;
        font-weight: 400;
        font-size: 24px;
        margin: 0;
    }
`;