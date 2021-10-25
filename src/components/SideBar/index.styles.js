import styled from 'styled-components'

export const Container= styled.nav`
    position: fixed;
    top:0;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    background:#222;
	width: 4rem;
    filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
    box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index:10;
`

