import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1480px;
    margin: auto;
    min-height: calc(100vh - 5rem);
    padding: 0 1.5rem;

    @media(max-width: 1280px){
        max-width: 1140px;
        padding: 0 1rem;
    }
`


export const ContentCharacters = styled.div`
    margin-top: 3rem;
    background: linear-gradient(0deg, rgba(11, 43, 38, 0.2) 0%, rgba(35, 83, 71, 0.2) 100%);
    box-shadow: inset 1px 1px 50px rgba(142, 182, 155, 0.05);
    border-radius: 16px;
    padding: 1.5rem;

    .title h1{
        color: var(--text-color);
        font-size: 1.5rem;
        margin-bottom: 2rem;

        @media(max-width: 480px){
            font-size: 1.25rem
        }
    }

    .characters-cards{
        display: flex;
        width: 100%;
        gap: 1rem;
        justify-content: center;


        @media(max-width: 1280px){
            div#card-character:nth-last-child(-n + 3){
                display: none;
            }
        }

        @media(max-width: 880px){
            div#card-character:nth-last-child(-n + 4){
                display: none;
            }
        }

        @media(max-width: 780px){
            div#card-character:nth-last-child(-n + 5){
                display: none;
            }
        }

        @media(max-width: 480px){
            div#card-character:nth-last-child(-n + 6){
                display: none;
            }
        }
    }

`

export const ContentEpsodes = styled.div`
    margin-top: 3rem;
    padding: 1.5rem 1.5rem 3rem;

    .title h1{
        color: var(--text-color);
        font-size: 1.5rem;
        margin-bottom: 2rem;

        @media(max-width: 480px){
            font-size: 1.25rem
        }
    }

    .episodes-cards{
        display: flex;
        width: 100%;
        gap: 1rem;
        justify-content: center;
        min-height: 9.6875rem;
        
    }
`



