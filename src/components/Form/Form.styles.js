import styled from "styled-components";


export const TextSection = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  border-radius: 1rem;
  
  @media screen and (max-width: 768px) {
  }
  input {
    background:transparent;
    width: 80%;
    padding: 1rem;
    margin: 10px 0;
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
    margin: 10px 0;
    color: #fff;
  }
`;