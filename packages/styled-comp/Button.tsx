import styled from "styled-components";

export const Button = styled.button`
  border-radius: ${({ bgColor }) => (() => {
    if (bgColor === 'red') return '6px';
    if (bgColor === 'blue') return '10px';
    return '20px';
  })()};
  background-color: ${({ bgColor }) => bgColor};
`
