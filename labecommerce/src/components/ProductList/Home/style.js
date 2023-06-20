import { styled } from "styled-components";

export const Main = styled.main`
    padding: 10px;
`;

export const HeaderProductList = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;

    > p {
        flex-grow: 1;
    }
`

export const List = styled.div`
    display: flex;
    justify-content: space-evenly;
`