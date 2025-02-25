export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
  }