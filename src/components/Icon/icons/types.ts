import { SVGProps } from "react";

export type SvgIconProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "xmlns">;
