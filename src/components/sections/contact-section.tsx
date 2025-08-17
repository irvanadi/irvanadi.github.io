"use client";

import {
	AnimatedElement,
	AnimatedSection,
} from "@/components/ui/animated-element";
import { Button } from "@/components/ui/button";

export function ContactSection() {
	return (
		<AnimatedSection className="py-20 px-8 sm:px-20 bg-black/20">
			<div className="max-w-4xl mx-auto text-center">
				<AnimatedElement animation="fadeInUp">
					<h2 className="text-4xl font-bold text-white mb-8">
						Let&apos;s Work Together
					</h2>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp" delay={0.3}>
					<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
						I&apos;m always interested in new opportunities and exciting
						projects. Let&apos;s discuss how we can bring your ideas to life.
					</p>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp" delay={0.5}>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
							Get In Touch
						</Button>
						<Button
							variant="outline"
							className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
						>
							Download Resume
						</Button>
					</div>
				</AnimatedElement>
			</div>
		</AnimatedSection>
	);
}
