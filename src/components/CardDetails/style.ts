import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 2rem 4rem;
    background: linear-gradient(0deg, rgba(11, 43, 38, 0.2) 0%, rgba(35, 83, 71, 0.2) 100%);
    box-shadow: inset 1px 1px 50px rgba(142, 182, 155, 0.05);
    border-radius: 16px;
    margin: 2rem 0;
    max-width: 35rem;
    width: 100%;

    @media (max-width: 610px) {
        padding: 2rem 1rem;
    }

    @media (max-width: 480px) {
        justify-content: space-between;
        flex-direction: column;
        width: fit-content;
        padding: 2rem 3rem;
    }

    .face-character{
        clip-path: circle();

        &, img{
            max-width: 8rem;
            max-height: 8rem;
            width: 100%;
            
            @media (max-width: 480px) {
                max-width: 7rem;
                max-height: 7rem;
            }
        }
    }

    .details{
        display: flex;
        flex-direction: column;
        gap: .8rem;
        max-width: 15rem;
        width:100% ;

        .title{
            width:100% ;
        }

        .generous-details{
            display: flex;
            justify-content: flex-start;
            gap: 1rem;
            font-size: 14px;
            width: 100%;

            .generous{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: .2rem;
            }
        }

        .status{
             width: fit-content;
             padding: .2rem.5rem;
             border-radius: 5px;
             
             &.alive-background {
                background-color: #198754;
            }

            &.dead-background {
                background-color: #dc3545;
            }

            &.unknown-background {
                background-color: #6c757d;
            }
            
            
        }

        .location{
            p{
                color: #AAAAAA;
                font-size: 14px;

                @media (max-width: 610px) {
                    font-size: 12px;
                }
            }

            h3{
                font-weight: 400;
                font-size: 1rem;

                @media (max-width: 610px) {
                    font-size: 14px;
                }
            }
        }
    }
`