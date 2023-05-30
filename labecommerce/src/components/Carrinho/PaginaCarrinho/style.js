import { styled } from 'styled-components'

export const CarrinhoNav = styled.nav`
    border: 1px solid black;
    padding: 10px;

    h2 {
        margin-bottom: 10px;
    }

    > p {
        margin-top: 10px;
    }
`

export const ListaItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`