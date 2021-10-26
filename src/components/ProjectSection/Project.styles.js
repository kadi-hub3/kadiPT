import styled from 'styled-components'

export const ProjectsContainer=styled.div`
    background:#333;
    height: 960px;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const ProjectsWrapper=styled.div`
    position:relative;
    max-width:80%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-template-rows:minmax(100px,auto);
    grid-auto-flow:dense;
    grid-gap:20px;
    margin-left: auto;
    margin-right:auto;
    

    @media (max-width:991px){
        grid-template-columns: repeat(auto-fill, minmax(50%,1fr));
        grid-template-rows:minmax(auto,auto);
    }
`

export const ProjBox=styled.div`
    background:#222;
    padding:20px;
    display:grid;
    font-size:20px;
    place-items:center;
    text-align:center;
    color:#fff;
    transition: .5s;
    

    &:hover{
        background: #e91e63;
    }

    &:nth-child(1){
        grid-column: span 2;
        grid-row:span 1;
    }
    &:nth-child(2){
        grid-column: span 1;
        grid-row:span 2;
    }
    &:nth-child(4){
        grid-column: span 1;
        grid-row:span 2;
    }
    &:nth-child(5){
        grid-column: span 3;
        grid-row:span 1;
    }
    @media (max-width:991px){
        grid-column:unset !important;
        grid-row:unset !important;
    }

`

export const ProjContent=styled.div`
height:100%;
width:60%;
`

export const Img=styled.img`
    width:100%;
    height:100%;
    object-fit: contain;

`

export const ProjP=styled.p`
display:none;`