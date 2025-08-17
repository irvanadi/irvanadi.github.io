"use client";

import { AnimatedElement } from "@/components/ui/animated-element";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
	return (
		<section className="pt-32 pb-20 px-8 sm:px-20 snap-center" id="hero">
			<div className="max-w-4xl mx-auto text-center">
				<AnimatedElement animation="fadeInUp" delay={0.2}>
					<h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
						Fullstack Developer
					</h1>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp" delay={0.4}>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Passionate fullstack developer with 3 years of experience creating
						engaging, responsive web and mobile applications using modern
						technologies.
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
