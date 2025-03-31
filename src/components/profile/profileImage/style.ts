import styled from 'styled-components';

interface ContainerProps {
    size: number;
};

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`