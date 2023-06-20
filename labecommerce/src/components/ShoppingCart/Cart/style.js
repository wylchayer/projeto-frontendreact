import { styled } from 'styled-components'

export const NavCart = styled.nav`
    border: 1px solid black;
    padding: 10px;

    h2 {
        margin-bottom: 10px;
    }

    > p {
        margin-top: 10px;
    }
`

export const ItemsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`