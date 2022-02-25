import styled from "styled-components";

export const Button = styled.button<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
`
