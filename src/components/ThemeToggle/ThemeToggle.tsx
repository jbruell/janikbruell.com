import { Icon } from "@components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

export type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle(props: ThemeToggleProps): JSX.Element {
  const { className } = props;

  const { theme, setTheme } = useTheme();
  //   const [mounted, setMounted] = useState(false);

  //   useEffect(() => setMounted(true), []);

  //   console.log(theme, mounted);

  //   if (!mounted) {
  //     return <></>;
  //   }

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      onClick={() =>
        setTheme((theme: string) => (theme === "dark" ? "light" : "dark"))
      }
    >
      <Icon
        name="Moon"
        className={theme === "dark" ? styles.hidden : undefined}
      />
      <Icon
        name="Sun"
        className={theme !== "dark" ? styles.hidden : undefined}
      />
    </div>
  );
}
