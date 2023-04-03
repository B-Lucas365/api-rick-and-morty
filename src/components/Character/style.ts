import styled from "styled-components"

interface CardProps {
    small: boolean
}

export const Card = styled.div<CardProps>`
    position: relative; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    max-width: ${props => props.small ? '6rem' : '8.5rem'}; 
    max-height: ${props => props.small ? '6rem' : '8.5rem'}; 
    border-radius: 10px;
    transition: all 0.3s ease-in-out; 
    background: rgba(0, 0, 0, 0.2);
    filter: brightness(0.8);

    @media(max-width: 560px){
        max-width: ${props => props.small ? '6rem' : '7rem'};
        max-height: ${props => props.small ? '6rem' : '7rem'};
    }
 

    &:hover {
        transform: scale(1.1);
        width: 8.5rem;
        height: 8.5rem; 
        margin-left: ${props => props.small ? '0' : '2rem'};
        filter: brightness(1);
        z-index: 999;

        & .block-favorite{
            &.block-want-favorite{
                opacity: 1;
            }
        }
    }

    .block-favorite{
        background: #000;
        padding: 0.375rem;
        border-radius: 0 0.625rem 0 .5rem;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &.block-want-favorite{
            padding: .5rem;
            opacity: 0;

            @media (max-width: 780px){
                opacity: 1;
            }
        }
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 10px;
    }


    p {
        position: absolute;
        bottom: 0;
        left: ${props => props.small ? '-1.6rem' : '-2rem'};
        padding: 10px;
        color: #fff;
        font-weight: 500;
        font-size: ${props => props.small ? '0.75rem' : '0.875rem'};
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        writing-mode: vertical-rl;
        transform: rotate(-180deg); 
        text-transform: uppercase;
        height: 100%;
    }

    &:hover p {
        opacity: 1;
    }
`
