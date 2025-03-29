import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;

export const SearchBarContainer = styled.div`
    margin-top: 5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  /* 수평 중앙 정렬 */
    justify-content: center;  /* 수직 중앙 정렬 */
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 3rem;
    }
`;

export const Text = styled.div`
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
    color: #686868;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const InputContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    
    input {
        width: 40rem;
        height: 2.5rem;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        border: 0.03rem solid #D9D9D9;
        padding-left: 0.5rem;

        @media (max-width: 768px) {
            width: 90%;
            font-size: 1rem;
            height: 2rem;
        }
    }
`;