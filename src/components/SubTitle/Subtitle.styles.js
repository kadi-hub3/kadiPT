import styled from 'styled-components'

export const TextTitle = styled.h1`
  text{
      font-size: 2rem; 
      stroke: #f98923;
      stroke-width: 3;
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