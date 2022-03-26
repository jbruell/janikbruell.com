import { useEffect, useRef, useState } from "react";

export enum Direction {
  UP,
  DOWN,
}

export default function useScrollDirection(): Direction {
  const [direction, setDirection] = useState(Direction.UP);
  const prevScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    function onScroll() {
      const scrollY = window.scrollY;
      setDirection(
        scrollY > prevScrollY.current ? Direction.DOWN : Direction.UP
      );

      prevScrollY.current = scrollY;
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return direction;
}
