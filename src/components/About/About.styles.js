import styled from "styled-components";

export const InfoContainer = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
margin-left: auto;
margin-right:auto;
grid-gap: 30px;
color: #fff;
background: #333;
`;

export const InfoRow= styled.div`
  position:relative;
  display: grid;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  grid-template-columns: repeat(2,1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2,1fr);

  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;
  letter-spacing: 1px;
  line-height: 1.5;
`;
export const TextTitle = styled.h1`
text{
    font-size: 10rem; 
    stroke: #f98923;
    font-weight: 700;
    stroke-width: 12;
    background:red;
    animation: strokeText 5s linear;

    @keyframes strokeText{
        0%{
            stroke-dasharray: 0 70%;
            stroke-dashoffset: 10%; 
        }
        100%{
            stroke-dasharray: 70% 0;
            stroke-dashoffset: -10%;
        }
    }
}

`;
export const TextContent = styled.p`
  font-size: 20px;
  letter-spacing: 1px;

`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0;
`;