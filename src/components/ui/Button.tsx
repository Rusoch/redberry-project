import { firago } from "@/styles/fonts/fonts";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary";
	className?: string;
	width?: string;
	height?: string;
}

export default function Button({
	children,
	onClick,
	variant = "primary",
	className = "",
	width = "auto",
	height = "auto",
}: ButtonProps) {
	const baseStyles = `text-base leading-[100%] font-normal`;

	const variants = {
		primary:
			"bg-white border border-lila text-darkBlack rounded-[5px]",
		secondary: "bg-lila text-white hover:bg-opacity-90 rounded-lg",
	};

	return (
		<button
			onClick={onClick}
			className={`${baseStyles} ${variants[variant]} ${className}`}
			style={{ width, height }}
		>
			{children}
		</button>
	);
}
