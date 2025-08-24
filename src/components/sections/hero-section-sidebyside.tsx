"use client";

import { AnimatedElement } from "@/components/ui/animated-element";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import photo from "~/public/photo.webp";

export function HeroSectionSideBySide() {
	return (
		<section
			className="relative py-10 md:py-20 px-4 sm:px-8 lg:px-20 snap-center overflow-hidden min-h-screen flex items-center"
			id="hero-sidebyside"
		>
			{/* Professional background with geometric patterns */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"></div>
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
			</div>
			{/* Hexagonal pattern overlay */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23ffffff' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
					backgroundSize: "100px 100px",
				}}
			></div>

			{/* Grid Layout */}
			<div className="relative max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
					{/* Left Side - Photo */}
					<AnimatedElement animation="fadeInUp" delay={0.1}>
						<div className="flex justify-center order-1 lg:order-1 lg:justify-end">
							<div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
								{/* Animated border ring */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow p-2">
									<div className="w-full h-full rounded-full bg-gray-900"></div>
								</div>
								{/* Photo container */}
								<div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
									<Image
										src={photo}
										alt="Irvan Adi Santoso"
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
							</div>
						</div>
					</AnimatedElement>

					{/* Right Side - Content */}
					<div className="text-center lg:text-left order-2 lg:order-2">
						<AnimatedElement animation="fadeInUp" delay={0.2}>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
								Technical Consultant
								<span className="block text-cyan-400">Software Developer</span>
							</h1>
						</AnimatedElement>

						<AnimatedElement animation="fadeInUp" delay={0.4}>
							<p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
								Technical Consultant and Software Developer with 2+ years of
								experience in ERP systems
							</p>
						</AnimatedElement>

						<AnimatedElement animation="fadeInUp" delay={0.6}>
							<div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 lg:mb-8">
								<span className="bg-blue-600/20 text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
									React Native
								</span>
								<span className="bg-green-600/20 text-green-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
									Next.js
								</span>
								<span className="bg-orange-600/20 text-orange-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
									Java
								</span>
								<span className="bg-purple-600/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
									Node.js
								</span>
							</div>
						</AnimatedElement>

						<AnimatedElement animation="fadeInUp" delay={0.8}>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
								<a href={"#projects"}>
									<Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg cursor-pointer w-full sm:w-auto">
										View My Work
									</Button>
								</a>
								<Button
									variant="outline"
									className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg w-full sm:w-auto"
								>
									Download CV
								</Button>
							</div>
						</AnimatedElement>

						{/* Social Media Links */}
						<AnimatedElement animation="fadeInUp" delay={1.0}>
							<div className="flex justify-center lg:justify-start items-center gap-3 sm:gap-4 flex-wrap">
								{/* LinkedIn */}
								<a
									href="https://linkedin.com/in/irvanadisantoso"
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-2 bg-white/5 hover:bg-blue-600/20 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 rounded-lg px-3 py-2 transition-all duration-300"
								>
									<div className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300">
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-full h-full"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</div>
									<span className="text-gray-300 group-hover:text-white text-xs font-medium">
										LinkedIn
									</span>
								</a>

								{/* GitHub */}
								<a
									href="https://github.com/irvanadi"
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-2 bg-white/5 hover:bg-gray-700/30 backdrop-blur-sm border border-white/10 hover:border-gray-400/30 rounded-lg px-3 py-2 transition-all duration-300"
								>
									<div className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white">
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-full h-full"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
									<span className="text-gray-300 group-hover:text-white text-xs font-medium">
										GitHub
									</span>
								</a>

								{/* Email */}
								<a
									href="mailto:irvanxeno@example.com"
									className="group flex items-center gap-2 bg-white/5 hover:bg-emerald-600/20 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 rounded-lg px-3 py-2 transition-all duration-300"
								>
									<div className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:text-emerald-300">
										<svg
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-full h-full"
										>
											<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
										</svg>
									</div>
									<span className="text-gray-300 group-hover:text-white text-xs font-medium">
										Email
									</span>
								</a>
							</div>
						</AnimatedElement>
					</div>
				</div>
			</div>
		</section>
	);
}
