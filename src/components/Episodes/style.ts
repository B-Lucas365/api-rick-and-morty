import styled from "styled-components";

export const Card = styled.div`
    background: linear-gradient(0deg, rgba(11, 43, 38, 0.8) 0%, rgba(35, 83, 71, 0.8) 100%) repeat no-repeat;
    border-radius: 10px;
    width: 17.25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    transition: all 0.3s ease-in-out;

    color: var(--text-color);

    @media(max-width: 1280px){
        width: 100%;
        min-width: 13.75rem;

        &:nth-last-child(-n + 1){
            display: none;
        }
    }

    @media(max-width: 1000px){
        width: 100%;
        min-width: auto;

        .episode-info .air-date{
            display: none;
        }
    }

    @media(max-width: 780px){
        &:nth-last-child(-n + 2){
            display: none;
        }
    }

    @media(max-width: 580px){
        &:nth-last-child(-n + 3){
            display: none;
        }
    }
    .descriptions{
        h3{
            font-size: 1rem;
        }
    
        .episode-info{
            display: flex;
            justify-content: space-between;
            font-size: .8rem;
            margin-top: 1rem;
            margin-bottom: 1.5rem;

        }
    }



    .box{
        display: flex;
        align-items: flex-end;
        
        .box-img{
            clip-path: circle();
            height: 2rem;
            width: 2rem;
            margin-left: -12px;
            
            &:nth-child(1){
                margin-left: 0;
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        img{
            width: 100%;
            height: 100%;
        }
    }

` 