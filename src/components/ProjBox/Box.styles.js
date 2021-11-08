import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
     overflow: hidden;

.imgBx, . contentBx {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
img{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.contentBx::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(22,24,29,0.9);
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
  transform-origin: right;
}
  &:hover .contentBx::before{
    transform: scaleX(1);
    transition: transform 0.2s ease-in-out;
    transform-origin: left;
  }
   .contentBx{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contentBx .content{
    position: relative;
    padding: 3rem;
    z-index: 1;
    transition: .2s;
    transform: translateX(-600px);
    color: #fff;
  }
   .contentBx .content h3{
    font-weight: bolder;
    color: #fff;
    letter-spacing: 2px;
    padding-bottom: 2rem;
    font-size: 16px;
  }
  .contentBx .content p{
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: 1px;
  }
  .contentBx .content a{
      text-decoration: none;
      color: #fff;
      font-size: 14px !important;

  }

  &:hover .contentBx .content{
    transition: .2s;
    transform: translateX(0);
  }

  `