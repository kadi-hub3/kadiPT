import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background: transparent;
  white-space: nowrap;
  outline: none;
  border: ${({ primary }) => (primary ? "rgba(245, 158, 11)" : "rgba(219, 39, 119)")} 3px solid;
  text-decoration: none;
  max-width: 200px;
  min-width: 100px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  padding: ${({ big }) => (big ? "20px 80px" : "14px 44px")};
  color: ${({ dark }) => (dark ? "rgba(219, 39, 119)":"rgba(245, 158, 11)" )};
  font-size: ${({ big }) => (big ? "18px" : "14px")};
  &:hover {
    transform: translateY(-6px);
    background: rgba(245, 158, 11);
    color: #222;
  }
`;