import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import file from "~/public/file.svg";

const Header: React.FC<React.ComponentProps<"header">> = ({ ...props }) => {
	return (
		<header
			className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
			{...props}
		>
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 group">
						<span className="sr-only font-roboto text-white">
							Your Portfolio
						</span>
						<div className="flex items-center space-x-3">
							<div className="relative">
								{/* <Image
									src={file}
									alt="Your Portfolio"
									className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
								/> */}
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-white rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
								Irvan Adi Portfolio
							</span>
						</div>
					</a>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex lg:gap-x-8 lg:justify-end items-center">
					<a
						href="#about"
						className="relative text-sm font-semibold text-white/90 hover:text-white transition-all duration-300 group px-3 py-2"
					>
						<span className="relative z-10">About</span>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
						<div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-white  w-0 group-hover:w-full transition-all duration-300"></div>
					</a>
					<a
						href="#skills"
						className="relative text-sm font-semibold text-white/90 hover:text-white transition-all duration-300 group px-3 py-2"
					>
						<span className="relative z-10">Skills</span>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
						<div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-white  w-0 group-hover:w-full transition-all duration-300"></div>
					</a>
					<a
						href="#experience"
						className="relative text-sm font-semibold text-white/90 hover:text-white transition-all duration-300 group px-3 py-2"
					>
						<span className="relative z-10">Experience</span>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
						<div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-white  w-0 group-hover:w-full transition-all duration-300"></div>
					</a>
					<a
						href="#projects"
						className="relative text-sm font-semibold text-white/90 hover:text-white transition-all duration-300 group px-3 py-2"
					>
						<span className="relative z-10">Projects</span>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
						<div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-white  w-0 group-hover:w-full transition-all duration-300"></div>
					</a>

					{/* CTA Button */}
					<Button className="ml-4 bg-gradient-to-r from-cyan-500 to-purple-500/20 hover:from-cyan-600 hover:to-purple-500/20  text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
						Contact Me
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="lg:hidden">
					<button className="group relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300">
						<div className="flex flex-col space-y-1">
							<div className="w-6 h-0.5 bg-white group-hover:bg-cyan-400 transition-colors duration-300"></div>
							<div className="w-6 h-0.5 bg-white group-hover:bg-cyan-400 transition-colors duration-300"></div>
							<div className="w-6 h-0.5 bg-white group-hover:bg-cyan-400 transition-colors duration-300"></div>
						</div>
					</button>
				</div>
			</nav>
		</header>
	);
};

export { Header };
