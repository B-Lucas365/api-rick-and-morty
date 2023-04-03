import styled from "styled-components";

export const Container = styled.div`
    padding: 3.125rem 1.75rem 0;
    height: 26.25rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: linear-gradient(0deg, rgba(11, 43, 38, 0.8) 0%, rgba(35, 83, 71, 0.8) 100%);
    border-radius: 16px;
    margin-top: 2rem;

    @media (max-width: 780px) {
        width: 100%;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        height: 100%;
        padding: 2rem 1.75rem;
    }

    @media (max-width: 660px){
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 0;

        h3{
            display: none;
        }
    }

    

    .inputs-filters{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        @media (max-width: 780px) {
            flex-direction: row;
        }

        @media (max-width: 480px){
            flex-direction: column;
            width: 100%;
            gap: 1rem;
        }

        .block-filter{
            display: flex;
            flex-direction: column;
            gap: 0.375rem;

            @media (max-width: 480px){
                flex-direction: row;
                align-items: center;
            }

            label{
                font-size: 0.875rem;
                color: #ededed;

                @media (max-width: 480px){
                    font-size: .75rem;
                    min-width: 2.625rem;
                }
            }

            select{
                width: 11.25rem;
                height: 1.875rem;
                border: 0;
                border-radius: 1rem;
                padding: 0 0.625rem;
                outline: none;

                @media (max-width: 780px) {
                    width: 8.4375rem;
                }

                @media (max-width: 550px){
                    width: 100%;
                    font-size: .75rem;
                    height: 1.5rem;
                }
            }
        }
    }
`