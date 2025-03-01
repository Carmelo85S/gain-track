export interface ExperienceProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
    img: string;
}