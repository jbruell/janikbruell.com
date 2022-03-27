import * as icons from "./icons";
import { SvgIconProps } from "./icons/types";

export type IconProps = SvgIconProps & {
  name: keyof typeof icons;
};

export default function Icon(props: IconProps): JSX.Element {
  const { name, ...iconProps } = props;

  const ResolvedIcon = icons[name];

  return <ResolvedIcon fill="currentColor" {...iconProps} />;
}
