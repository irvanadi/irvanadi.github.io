import React from "react";
import { Button } from "./button";
import Image from "next/image";
import file from "~/public/file.svg";

const Header: React.FC<React.ComponentProps<"header">> = ({
	className,
	...props
}) => {
	return (
		<header className="absolute inset-x-0 top-0 z-50" {...props}>
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only font-roboto text-white">
							Your Company
						</span>
						<Image
							src={file}
							alt="Your Company"
							className="h-8 w-auto"
						/>
					</a>
				</div>
				<div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
					<a href="#" className="text-sm/6 font-semibold text-white">
						Work
					</a>
					<a href="#" className="text-sm/6 font-semibold text-white">
						Experience
					</a>
					<a href="#" className="text-sm/6 font-semibold text-white">
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
};

export { Header };
