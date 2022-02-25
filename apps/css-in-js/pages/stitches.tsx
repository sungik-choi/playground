/* eslint-disable react/jsx-key */
import { Button } from "stitches";

import useColorInterval from "../hooks/useColorInterval";
import { array } from "../constants";

export default function Docs() {
  const color = useColorInterval();

  return (
    <div>
      <h2>Stitches</h2>
      <div>
        {array.map((_, i) => (
          <Button
            key={i}
            color={color}
            css={{
              borderRadius: "8px",
            }}
          >
            button
          </Button>
        ))}
      </div>
    </div>
  );
}
