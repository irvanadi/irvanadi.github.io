"use client";

import { AnimatedElement } from "@/components/ui/animated-element";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<section
			className="relative pt-32 pb-20 px-8 sm:px-20 snap-center overflow-hidden"
			id="hero"
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
			<div className="relative max-w-4xl mx-auto text-center">
				<AnimatedElement animation="fadeInUp" delay={0.2}>
					<h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
						Technical Consultant / Software Developer
					</h1>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp" delay={0.4}>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Technical Consultant and Software Developer with 2+ years of
						experience in ERP systems
					</p>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp" delay={0.6}>
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						<span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
							React Native
						</span>
						<span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
							Next.js
						</span>
						<span className="bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
							Java
						</span>
						<span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
							Node.js
						</span>
					</div>
				</AnimatedElement>
				<AnimatedElement animation="scaleIn" delay={0.8}>
					<a href={"#projects"}>
						<Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg cursor-pointer">
							View My Work
						</Button>
					</a>
				</AnimatedElement>
			</div>
		</section>
	);
}
