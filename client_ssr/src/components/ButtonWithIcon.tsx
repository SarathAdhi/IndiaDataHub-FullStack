import { LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../../client/src/components/ui/button";

const ButtonWithIcon = ({
  Icon,
  variant = "outline",
  ...rest
}: {
  Icon: LucideIcon;
  variant?: "ghost" | "outline";
} & ButtonProps) => (
  <Button size="icon" variant={variant} className="size-9" {...rest}>
    <Icon className="size-5" />
  </Button>
);

export { ButtonWithIcon };
