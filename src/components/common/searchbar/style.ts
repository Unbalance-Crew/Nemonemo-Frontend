import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;

export const Text = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;
    width: 13rem;
    padding: 0.2rem;
    color: #686868;
    background-color: #FFDD61;
    border-radius: 10px;
    padding-left: 0.5rem;
`

export const SearchBarContainer = styled.div`
    margin-top: 7rem;
    width: 100%;
    height: 100%;
    margin-left: 2rem;

    @media (max-width: 768px) {
        margin-top: 3rem;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    
    input {
        width: 30rem;
        height: 2.5rem;
        border: 2px solid #E3E3E3;
        background-color: #F2F2F2;
        padding-left: 0.7rem;
        border-radius: 20px;
        font-size: 0.9rem;

        &:focus {
            outline: none;
        }

        @media (max-width: 768px) {
            width: 90%;
            font-size: 1rem;
            height: 2rem;
        }
    }
`;