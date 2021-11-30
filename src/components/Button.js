import styled, {css} from "styled-components";
import { Link as LinkS} from "react-scroll";

const buttonStyles = css`
  background: ${({lightBg})=>lightBg? '#C7D4F0':'#161821'};
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  border: ${({ primary }) => (primary ? "rgba(245, 158, 11)" : "rgba(219, 39, 119)")} 3px solid;
  text-decoration: none;
  max-width: 200px;
  min-width: 100px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 25px;
  padding: ${({ big }) => (big ? "20px 80px" : "14px 44px")};
  color: ${({ dark }) => (dark ? "rgba(219, 39, 119)":"rgba(245, 158, 11)" )};
  color: ${({lightText})=>lightText? '#fff':'#000'};
  font-size: ${({ big }) => (big ? "16px" : "12px")};
  &:hover {
    transform: translateY(-6px);
    background: ${({ primary }) => (primary ? "rgba(245, 158, 11)" : "rgba(219, 39, 119)")};
    color: #222;
  }
`
export const StyledButton = styled(LinkS)`${buttonStyles}`;
export const ButtonA = styled.a`${buttonStyles}`;
export const Button = styled.button`${buttonStyles}`;