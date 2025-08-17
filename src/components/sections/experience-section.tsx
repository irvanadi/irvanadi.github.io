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
			className="py-20 px-8 sm:px-20 bg-black/20 snap-center"
			id="experience"
		>
			<div className="max-w-4xl mx-auto">
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
									<h3 className="text-xl font-bold">React Native Developer</h3>
									<p className="text-cyan-400 text-sm mt-1">2024 - Present</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-gray-300 pb-6">
								<ul className="space-y-2 mt-4">
									<li>
										• Leading React Native mobile app development with latest
										technologies
									</li>
									<li>
										• Implementing cross-platform solutions for iOS and Android
									</li>
									<li>• Optimizing app performance and user experience</li>
									<li>
										• Mentoring junior developers and conducting code reviews
									</li>
									<li>
										• Integrating native modules and third-party libraries
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="frontend-dev"
							className="bg-white/5 rounded-lg border border-white/10 px-6"
						>
							<AccordionTrigger className="text-white hover:text-cyan-400 py-6">
								<div className="text-left">
									<h3 className="text-xl font-bold">Fullstack Developer</h3>
									<p className="text-cyan-400 text-sm mt-1">
										2022 - Present (3 Years)
									</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-gray-300 pb-6">
								<ul className="space-y-2 mt-4">
									<li>
										• Developed and maintained React Native mobile applications
										serving 10,000+ users
									</li>
									<li>
										• Built responsive web applications using Next.js with
										server-side rendering
									</li>
									<li>
										• Collaborated with backend teams to integrate Java and
										Node.js APIs
									</li>
									<li>
										• Implemented modern UI/UX designs with focus on performance
										and accessibility
									</li>
									<li>
										• Optimized application performance resulting in 40% faster
										load times
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
