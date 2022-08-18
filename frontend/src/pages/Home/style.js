import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HomeContent = styled.div`
    width: 80%;
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    input{
        width: 400px;
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        background: #cac7c7;
    }

    .inputsearch{
        width: 100%;
        display: flex;
        min-width: 0px;
        flex: 0 1 100px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .table{
        width: 100%;
    }
`;
