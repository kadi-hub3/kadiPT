import styled from "styled-components";

export const InfoContainer = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
// max-width: 1100px;
margin-left: auto;
margin-right:auto;
padding: 0 24px;
justify-content: center;
color: #fff;
background: #222;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;



export const InfoRow = styled.div`
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
`;

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
  padding-bottom: 60px;
`;

export const Topline = styled.p`
  color: #00bfa6;
  margin-bottom: 2rem;
  padding: 2rem 4rem;
  font-size: 1.2rem;
  font-weight: 200;
  transform-origin: bottom left;
  text-shadow: 1px 1px 1px #333,
  1px 2px 1px #333,
  1px 3px 1px #333,
  1px 4px 1px #333,
  1px 5px 1px #333,
  1px 6px 1px #333,
  1px 7px 1px #333,
  1px 8px 1px #333,
  1px 9px 1px #333,
  1px 10px 1px #333,
  1px 18px 6px rgba(16,16,16,0.4),
  1px 22px 10px rgba(16,16,16,0.2),
  1px 25px 35px rgba(16,16,16,0.2),
  1px 30px 60px rgba(16,16,16,0.4);
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #fff;          
  padding-left: 3rem;
  text-align: left;
  padding-top: 6rem; 
  line-height: 1.5;
  text-shadow: 1px 1px 1px #333,
  1px 2px 1px #333,
  1px 3px 1px #333,
  1px 4px 1px #333,
  1px 5px 1px #333,
  1px 6px 1px #333,
  1px 7px 1px #333,
  1px 8px 1px #333,
  1px 9px 1px #333,
  1px 10px 1px #333,
  1px 18px 6px rgba(16,16,16,0.4),
  1px 22px 10px rgba(16,16,16,0.2),
  1px 25px 35px rgba(16,16,16,0.2),
  1px 30px 60px rgba(16,16,16,0.4);
  white-space:pre-line;
  letter-spacing: 5px;
 
  animation: animate 1s linear forwards;
  opacity: 0;

  &:nth-child(6){
    color:rgba(219, 39, 119);
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @keyframes animate {
    0%{
        opacity: 0;
        transform: rotateY(90deg);
        filter: blur(10px);
    }

    100%{
        opacity: 1;
        transform: rotateY(0);
        filter: blur(0);
    }
    
}
@keyframes bounce {
    0% { 
        transform: translateX(0%); } 
    15% { 
        transform: translateX(-25%) rotate(-5deg); } 
    30% { 
        transform: translateX(20%) rotate(3deg); } 
    45% { 
        transform: translateX(-15%) rotate(-3deg); } 
    60% { 
        transform: translateX(10%) rotate(2deg); }
    75% { 
        transform: translateX(-5%) rotate(-1deg); }
    100% { 
        transform: translateX(0%); } 
}
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
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