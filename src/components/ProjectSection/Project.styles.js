import styled from 'styled-components'

export const ProjectsContainer=styled.div`
    background:#333;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right:auto;
    padding: 40px 24px;
`

export const ProjectsWrapper=styled.div`
    max-width:90%;
    height:90%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-template-rows:minmax(200px,auto);
    grid-auto-flow:dense;
    grid-gap:20px;

 
    @media (max-width:991px){
        grid-template-columns: repeat(auto-fill, minmax(300px,.8fr));
        grid-template-rows:minmax(auto,auto);
    }
    @media screen and (min-width:1400px){
        grid-template-columns: repeat(auto-fill, minmax(300px,1fr)) !important;
        grid-template-rows:minmax(200px,auto);
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