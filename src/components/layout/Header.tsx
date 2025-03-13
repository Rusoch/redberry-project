import { fredoka } from "@/styles/fonts/fonts";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Header() {
	return (
		<header className="h-[100px] fixed top-0 left-0 right-0 z-50">
			<div className="max-w-[1920px] h-full px-[120px] py-[31px]">
				<div className="flex justify-between items-center h-full">
					<div className="flex items-center gap-1 w-[210px] h-[38px]">
						<div className="w-[168px] h-[38px]">
							<h1
								className={`${fredoka.className} text-[31px] leading-[100%] font-normal text-lila`}
							>
								Momentum
							</h1>
						</div>
						<Image
							src="/icons/Hourglass.svg"
							alt="hour glass"
							width={38}
							height={38}
						/>
					</div>

					<div className="flex items-center gap-10">
						<Button variant="primary" width="225px" height="39px">
							თანამშრომლის შექმნა
						</Button>
           
						<Button variant="secondary" width="268px" height="40px" className="flex items-center py-[10px] px-[20px]">
            <Image
							src="/icons/add.svg"
							alt="add icon"
							width={20}
							height={20}
						/>
							შექმენი ახალი დავალება
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
