import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    background-color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
`

export const HeaderWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    cursor: pointer;
    margin-left: 2.4rem;
`

export const MenuWrap = styled.nav`
    display: flex;
    margin-left: auto;
`

export const Menu = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-right: 1.5rem;
`

export const MenuItem = styled.li`
    font-size: 15px;
    cursor: pointer;
    padding: 5px 10px;
    font-weight: 400;
    border-radius: 10px;
    &:hover {
        background-color: #E0E0E0;
        transition: 0.4s;
    }
`