import React from "react";
import { styled } from "@stitches/react";

export const Button = styled("button", {
  variants: {
    color: {
      red: {
        backgroundColor: "red",
      },
      blue: {
        backgroundColor: "blue",
      },
      green: {
        backgroundColor: "green",
      },
    },
  },
});
