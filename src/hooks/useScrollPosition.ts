import { useEffect, useState } from "react";

export default function useScrollPositionMatch(
  matcher: (position: number) => boolean
): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !matcher) {
      return;
    }

    function onScroll() {
      setMatches(matcher(window.scrollY));
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [matcher]);

  return matches;
}
