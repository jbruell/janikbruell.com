import { createContext, FC, useContext, useEffect, useState } from "react";

type CurrentSectionContextType = string;
const CurrentSectionContext = createContext<CurrentSectionContextType | null>(
  null
);

type Section = {
  distance: number;
  id: string | null;
};

type CurrentSectionContextProviderProps = {};
export const CurrentSectionProvider: FC<CurrentSectionContextProviderProps> = (
  props
) => {
  const { children } = props;

  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const sections = document.querySelectorAll("section");

    function onScroll() {
      const centeredScrollY = window.scrollY + window.innerHeight / 2;

      const initial: Section = { distance: Infinity, id: null };
      const currentSection = Array.from(sections).reduce((prev, current) => {
        const distanceSectionTop = Math.abs(
          current.offsetTop - centeredScrollY
        );
        const distanceSectionBottom = Math.abs(
          current.offsetTop + current.offsetHeight - 1 - centeredScrollY
        );
        const distanceToCenter = Math.min(
          distanceSectionTop,
          distanceSectionBottom
        );

        if (prev.distance < distanceToCenter) {
          return prev;
        }
        return {
          distance: distanceToCenter,
          id: current.getAttribute("id"),
        };
      }, initial);

      setSection(currentSection.id);
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <CurrentSectionContext.Provider value={section}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const useCurrentSection = () => {
  const context = useContext(CurrentSectionContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentSection must be used within a CurrentSectionProvider"
    );
  }
  return context;
};
