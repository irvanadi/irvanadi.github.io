"use client";

import {
	AnimatedElement,
	AnimatedSection,
} from "@/components/ui/animated-element";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import {
	MotionHighlight,
	MotionHighlightItem,
} from "@/components/animate-ui/effects/motion-highlight";

export function SkillsSection() {
	return (
		<AnimatedSection className="py-20 px-8 sm:px-20 snap-center" id="skills">
			<div className="max-w-6xl mx-auto">
				<AnimatedElement animation="fadeInUp">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						Technical Skills
					</h2>
				</AnimatedElement>
				<MotionHighlight
					mode={"parent"}
					hover={true}
					containerClassName="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					className="bg-white/5 rounded-lg border border-white/10"
					controlledItems
				>
					<MotionHighlightItem className="grid-cols-9">
						<AnimatedElement
							animation="scaleIn"
							delay={0.2}
							className="grid-cols-9"
						>
							<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col grid-cols-8">
								<CardHeader>
									<CardTitle className="text-white">
										Mobile Development
									</CardTitle>
									<CardDescription className="text-gray-400">
										Cross-platform mobile apps
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-4 flex-1 flex flex-col justify-between">
									<ul className="space-y-2 text-gray-300">
										<li>• React Native</li>
										<li>• Expo</li>
										<li>• React Navigation</li>
										<li>• Native Modules</li>
									</ul>
								</CardContent>
							</Card>
						</AnimatedElement>
					</MotionHighlightItem>
					<MotionHighlightItem>
						<AnimatedElement animation="scaleIn" delay={0.4}>
							<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
								<CardHeader>
									<CardTitle className="text-white">Web Development</CardTitle>
									<CardDescription className="text-gray-400">
										Modern web applications
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-4 flex-1 flex flex-col justify-between">
									<ul className="space-y-2 text-gray-300">
										<li>• Next.js</li>
										<li>• React</li>
										<li>• TypeScript</li>
										<li>• Tailwind CSS</li>
									</ul>
								</CardContent>
							</Card>
						</AnimatedElement>
					</MotionHighlightItem>
					<MotionHighlightItem>
						<AnimatedElement animation="scaleIn" delay={0.6}>
							<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
								<CardHeader>
									<CardTitle className="text-white">
										Backend Development
									</CardTitle>
									<CardDescription className="text-gray-400">
										Server-side technologies
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-4 flex-1 flex flex-col justify-between">
									<ul className="space-y-2 text-gray-300">
										<li>• Node.js</li>
										<li>• Java</li>
										<li>• Express.js</li>
										<li>• RESTful APIs</li>
									</ul>
								</CardContent>
							</Card>
						</AnimatedElement>
					</MotionHighlightItem>
					<MotionHighlightItem>
						<AnimatedElement animation="scaleIn" delay={0.8}>
							<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
								<CardHeader>
									<CardTitle className="text-white">Tools & Others</CardTitle>
									<CardDescription className="text-gray-400">
										Development ecosystem
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-4 flex-1 flex flex-col justify-between">
									<ul className="space-y-2 text-gray-300">
										<li>• Git</li>
										<li>• Firebase</li>
										<li>• PostgreSQL</li>
										<li>• Oracle</li>
									</ul>
								</CardContent>
							</Card>
						</AnimatedElement>
					</MotionHighlightItem>
				</MotionHighlight>
			</div>
		</AnimatedSection>
	);
}
