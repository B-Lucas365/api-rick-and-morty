import styled from "styled-components";

export const Container = styled.div`
    color: var(--text-color);
    display: flex;
    flex-direction: column ;
    align-items: center;
    width: 100%;
    max-width: 1480px;
    margin: 1rem auto;
    padding: 1rem;
    
    .title{
        margin-bottom:3rem ;

        @media (max-width: 780px){
            margin-bottom: 3rem;

            h1 {
                font-size: 24px;
            }
        }

        @media (max-width: 480px) {
            margin-bottom: 2rem;

            h1 {
                font-size: 24px;
            }
        }


        h1{
            font-size: 30px;
            font-weight: 400;

        }
    }

    
    .search{
        display: flex;
        margin-bottom:1rem ;
        gap: 1rem;

        @media (max-width: 780px) {
            flex-direction: row;
            gap: 1rem;

            input {
                max-width: 15rem;
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            flex-direction: row;
            gap: 1rem;

            input{
                padding: .1rem .5rem;
                max-width: 6rem;
            }
        }

        input{
            border-radius:999px ;
            border: none;
            outline: none;
            padding: .3rem .5rem;
            width: 100%;
            max-width: 10rem;
        }
    }

    .observation{
        margin-top: 2rem;
    }

`

export const CharactersThisEpisode = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
    max-width:1000px;
    padding: 0 0 3rem 0;

    /* Media query para dispositivos móveis */
    @media (max-width: 768px) {
        gap: 1rem;
        padding: 2rem 1rem;
        justify-content: center;
    }

    /* Media query para tablets */
    @media (max-width: 1024px) {
        gap: 1.5rem;
        max-width: 800px;
        justify-content: center;
    }
`