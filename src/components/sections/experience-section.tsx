"use client";

import {
	AnimatedElement,
	AnimatedSection,
} from "@/components/ui/animated-element";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/animate-ui/radix/accordion";

export function ExperienceSection() {
	return (
		<AnimatedSection
			className="relative py-20 px-8 sm:px-20 snap-center overflow-hidden"
			id="experience"
		>
			{/* Professional background with diagonal elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950"></div>
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
				<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
				<div className="absolute top-10 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl"></div>
				<div className="absolute bottom-10 -right-20 w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl"></div>
			</div>
			{/* Diagonal line pattern */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
				}}
			></div>
			<div className="relative max-w-4xl mx-auto">
				<AnimatedElement animation="fadeInUp">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						Professional Experience
					</h2>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp" delay={0.3}>
					<Accordion
						type="single"
						collapsible
						className="w-full space-y-4"
						defaultValue="react-native-dev"
					>
						<AccordionItem
							value="react-native-dev"
							className="bg-white/5 rounded-lg border border-white/10 px-6"
						>
							<AccordionTrigger className="text-white hover:text-cyan-400 py-6">
								<div className="text-left">
									<h3 className="text-xl font-bold">Technical Consultant</h3>
									<p className="text-cyan-400 text-sm mt-1">2023 - Present</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-gray-300 pb-6">
								<ul className="space-y-2 mt-4">
									<li>
										• Provided consulting services for ERP implementation,
										customization, and optimization.
									</li>
									<li>
										• Developed and integrated additional applications to
										enhance ERP functionality.
									</li>
									<li>
										• Delivered end-user training and technical documentation to
										ensure successful ERP adoption.
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</AnimatedElement>
			</div>
		</AnimatedSection>
	);
}
