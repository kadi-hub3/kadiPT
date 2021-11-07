import styled from "styled-components";

export const ContactContainer = styled.div`
display: grid;
z-index: 1;
height: 960px;
width: 100%;
margin-left: auto;
margin-right:auto;
padding-left: 50px;
justify-content: center;
color: #fff;
background: #16181d;
 @media screen and (max-width: 768px) {
      padding: 100px 0;
      padding-left: 40px;
      height: 100%;
    }
  
`;

export const ContactRow= styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 20px;
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
  font-size: 14px;
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