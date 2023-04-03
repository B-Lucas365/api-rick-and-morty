import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 1480px;
    margin: auto;
    height: 5rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link{
        color: var(--text-color);
        text-decoration:none ;
    }

    img{
       width: 3.5rem;
    }

    ul{
        display: flex;
        list-style: none;
        color: var(--text-color);
        gap: 2rem;

        @media(max-width: 480px){
            gap: 1rem
        }

        li{
            cursor: pointer;

            @media(max-width: 480px){
                font-size: 0.875rem;
            }
        }
    }
`
