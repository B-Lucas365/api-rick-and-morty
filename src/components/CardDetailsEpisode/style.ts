import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(0deg, rgba(11, 43, 38, 0.2) 0%, rgba(35, 83, 71, 0.2) 100%);
    box-shadow: inset 1px 1px 50px rgba(142, 182, 155, 0.05);
    border-radius: 16px;
    padding: 2rem 4rem;
    color: var(--text-color);
    width: 100%;
    max-width: 545px;
    h1{
        font-weight: 400;
        font-size: 28px;
    }

    .details{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
`