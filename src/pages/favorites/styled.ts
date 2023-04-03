import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;

    color: var(--text-color);
    padding: 2rem 1rem;
    
    @media (max-width: 480px){
        gap: 0;
    }


    h1{
        font-weight: 400;
        font-size: 1.5rem;
    }

    .no-favorites{
        
    }
`

export const FavoritesCharacters = styled.div`
    width: 100%;
    max-width: 1480px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 1rem;

`