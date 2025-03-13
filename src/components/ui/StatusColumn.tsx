import React from "react";

interface StatusColumnProps {
	status: string;
	children?: React.ReactNode;
}

const statusStyles = {
	"დასაწყები": "bg-yellow",
	"პროგრესში": "bg-orange",
	"მზად ტესტირებისთვის": "bg-pink",
	"დასრულებული": "bg-blue",
};

export default function StatusColumn({ status, children }: StatusColumnProps) {
	const bgColor = statusStyles[status as keyof typeof statusStyles];

	return (
		<div
			className={`w-[381px] h-[54px] rounded-[10px] mb-[30px] py-[15px] text-white text-center ${bgColor} font-firago font-medium text-[20px] leading-[100%]`}
		>
			{status}
			{children}
		</div>
	);
}
