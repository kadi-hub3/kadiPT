import styled from 'styled-components'

export const Container= styled.nav`
    position: fixed;
    top:0;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    background:#222;
	width: 4rem;
    filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
    box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index:10;
`

export const IconsContainer=styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding: 1rem 0;


    path{
        stroke: rgba(253, 230, 138);
    }
`

export const NavContainer= styled.nav``

export const Logo= styled.img`
    width: 100%;
    height:60px;
`
