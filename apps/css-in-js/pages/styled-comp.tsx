/* eslint-disable react/jsx-key */
import { Button as BaseButton, styled } from "styled-comp";

import useColorInterval from "../hooks/useColorInterval";
import { array } from "../constants";

const Button = styled(BaseButton)`
  border-radius: 8px;
`

export default function Docs() {
  const color = useColorInterval();

  return (
    <div>
      <h2>Styled components</h2>
      <div>
        {array.map((_, i) => (
          <Button
            key={i}
            // @ts-ignore
            bgColor={color}
          >
            button
          </Button>
        ))}
      </div>
    </div>
  );
}
