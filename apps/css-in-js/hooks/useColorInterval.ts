/* eslint-disable react/jsx-key */
import { useState, useRef, useEffect, useCallback } from "react";

const colors = ["red", "blue", "green"] as const;

function useColorInterval() {
  const [index, setIndex] = useState(0);

  const changeColor = useCallback(() => {
    setIndex((prev) => (prev >= colors.length - 1 ? 0 : prev + 1));
  }, []);

  useInterval(changeColor, 2000);

  return colors[index];
}

const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    const timerId = setInterval(tick, delay);
    return () => clearInterval(timerId);
  }, [delay]);
};

export default useColorInterval;
