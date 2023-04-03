import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1480px;
    margin: auto;
    padding: 0 1.5rem;
    
`

export const Content = styled.div`
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const CardDetails = styled.div`
    display: flex;
    gap: 3rem;
    padding: 2rem 4rem;
    background: linear-gradient(0deg, rgba(11, 43, 38, 0.2) 0%, rgba(35, 83, 71, 0.2) 100%);
    box-shadow: inset 1px 1px 50px rgba(142, 182, 155, 0.05);
    border-radius: 16px;
    margin: 2rem 0;
    align-items: center;

    .face-character{
        clip-path: circle();
        img{
            width: 8rem;
        }
    }

    .details{
        display: flex;
        flex-direction: column;
        gap: .8rem;

        .title{
            
        }

        .generous-details{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            width: 80%;
        }

        .status{
             background:#198754 ;
             width: fit-content;
             padding: .2rem.5rem;
             border-radius: 5px;
        }

        .location{
            p{
                color: #AAAAAA;
                font-size: 14px;
            }

            h3{
                font-weight: 400;
                font-size: 1rem;
            }
        }
    }
`

export const AllCharacters = styled.div`
    display: flex;
    gap: 5rem;
    justify-content: center;
    width: 100%;

    @media (max-width: 780px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 660px){
        gap: 1rem;
    }

    .allCharacters{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 2rem 1.5rem;
        padding: 2rem 0;
        justify-content: flex-start;

        @media (max-width: 768px) {
            justify-content: center;
        }

         
        .character{ 
            position: relative; 
            display: flex; 
            flex-direction: column; 
            justify-content: center;
            align-items: center;
            max-width: 8.5rem; 
            max-height: 8.5rem; 
            transition: all 0.3s ease-in-out; 
            
            &:hover {
                margin-left: 2rem;
            }

            img{
                width: 6rem;
                border-radius: 10px;
            }

            p {
                position: absolute;
                bottom: 0;
                left: -3rem;
                padding: 10px;
                color: #fff;
                font-weight: 500;
                font-size: 0.875rem;
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
        }
    }

    .pagination{
        display: flex;
        gap: 1rem;
        justify-content: center;
        
        button{
            clip-path: circle();
            width: 40px;
            height: 40px;
            background: #8EB69B;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
        }
    }
`


