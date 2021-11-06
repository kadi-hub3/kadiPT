import styled from 'styled-components'

export const MainTitle=styled.h2`
    font-size: 25px;
    color: #fff;
    letter-spacing: 5px;
    white-space: pre-line;
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

    span{
        animation: animate 2s linear forwards;
        opacity: 0;
        margin: 0 1px;
        

    &:nth-child(1){
        animation-delay: .1s;
        &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
    }
    &:nth-child(2){
       animation-delay: .2s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(3){
       animation-delay: .3s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(4){
       animation-delay: .4s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(5){
       animation-delay: .5s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(6){
       animation-delay: .6s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(7){
       animation-delay: .7s;

       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(8){
       animation-delay: .8s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(9){
       animation-delay: .9s;
       color: rgba(219, 39, 119);
       font-size: 3rem;
       transform: rotateX(60deg);
       -webkit-text-stroke: #333 2px ;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(10){
       animation-delay: 1s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(11){
       animation-delay: 1.1s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   }
   &:nth-child(12){
       animation-delay: 1.2s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(13){
       animation-delay: 1.3s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(14){
       animation-delay: 1.4s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(15){
       animation-delay: 1.5s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(16){
       animation-delay: 1.6s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(17){
       animation-delay: 1.7s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(18){
       animation-delay: 1.8s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(19){
       animation-delay: 1.9s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(20){
       animation-delay: 2s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(21){
       animation-delay: 2.1s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(22){
       animation-delay: 2.2s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(23){
       animation-delay: 2.3s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
   }
   } 
   &:nth-child(24){
       animation-delay: 2.4s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(25){
       animation-delay: 2.5s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(26){
       animation-delay: 2.6s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(27){
       animation-delay: 2.7s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(28){
       animation-delay: 2.8s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(29){
       animation-delay: 2.9s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
   &:nth-child(30){
       animation-delay: 3s;
       &:hover{
           animation: bounce linear infinite .4s;
           opacity: 1;   
       }
   } 
 
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
`

export const BottomLine = styled.p`
  color: #00bfa6;
  margin-bottom: 2rem;
  padding: 2rem 2rem;
  font-size: 14px;
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