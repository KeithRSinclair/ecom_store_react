import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.2rem;
  background: transparent;
  border: 0.2rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  padding: 10px 20px;
  border-radius: 15px;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  transition: all 0.2s ease-in-ot;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
