import styled from "styled-components";

export const Section = styled.div`
  max-height: 960px;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    letter-spacing: 2px;
    margin-top: 4rem;
    margin-botton: 2rem;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }
`;

export const TextSection = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  
  @media screen and (max-width: 768px) {
  }
  input {
    background:transparent;
    width: 80%;
    padding: 1rem;
    margin: 1rem 0;
    outline: none;
    border: none;
    color: #fff;
    font-size:16px;
    border-bottom:  rgba(251, 207, 232) 4px solid;
    border-left:  rgba(251, 207, 232) 1px solid;
    @media screen and (max-width: 768px) {
      margin: 0;
      padding: 0.5rem;
      width: 95%;
    }
  }

  label {
    width: 100%;
    display: flex;
    margin: 1rem 0;
    color: #fff;
  }
`;