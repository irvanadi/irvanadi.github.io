"use client";

import {
	AnimatedElement,
	AnimatedSection,
} from "@/components/ui/animated-element";
import {
	MotionHighlight,
	MotionHighlightItem,
} from "@/components/animate-ui/effects/motion-highlight";

export function AboutSection() {
	return (
		<AnimatedSection
			className="py-20 px-8 sm:px-20 bg-black/20 snap-center about"
			id="about"
			stagger={true}
			delay={0.2}
		>
			<div className="max-w-6xl mx-auto">
				<AnimatedElement animation="fadeInUp">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						About Me
					</h2>
				</AnimatedElement>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<AnimatedElement animation="fadeInLeft" delay={0.3}>
							<p className="text-gray-300 text-lg leading-relaxed mb-6">
								I&apos;m a dedicated frontend developer with 3 years of hands-on
								experience building scalable web and mobile applications. My
								journey began with a passion for creating intuitive user
								interfaces and has evolved into expertise across the full
								development stack.
							</p>
						</AnimatedElement>
						<AnimatedElement animation="fadeInLeft" delay={0.5}>
							<p className="text-gray-300 text-lg leading-relaxed">
								I specialize in React Native for cross-platform mobile
								development, Next.js for high-performance web applications, and
								have strong backend skills with Java and Node.js to create
								end-to-end solutions.
							</p>
						</AnimatedElement>
					</div>
					<MotionHighlight
						mode="parent"
						hover={true}
						containerClassName="space-y-2"
						controlledItems
						className="bg-white/5 rounded-lg border border-white/10"
					>
						<MotionHighlightItem>
							<AnimatedElement animation="fadeInRight" delay={0.4}>
								<div className="bg-white/5 p-6 rounded-lg border border-white/10">
									<h3 className="text-white font-semibold text-xl mb-2">
										Frontend Focus
									</h3>
									<p className="text-gray-400">
										React, React Native, Next.js, TypeScript
									</p>
								</div>
							</AnimatedElement>
						</MotionHighlightItem>

						<MotionHighlightItem>
							<AnimatedElement animation="fadeInRight" delay={0.6}>
								<div className="bg-white/5 p-6 rounded-lg border border-white/10">
									<h3 className="text-white font-semibold text-xl mb-2">
										Backend Skills
									</h3>
									<p className="text-gray-400">
										Node.js, Java, REST APIs, Database Design
									</p>
								</div>
							</AnimatedElement>
						</MotionHighlightItem>
						<MotionHighlightItem>
							<AnimatedElement animation="fadeInRight" delay={0.8}>
								<div className="bg-white/5 p-6 rounded-lg border border-white/10">
									<h3 className="text-white font-semibold text-xl mb-2">
										Experience
									</h3>
									<p className="text-gray-400">
										3+ Years in Frontend Development
									</p>
								</div>
							</AnimatedElement>
						</MotionHighlightItem>
					</MotionHighlight>
				</div>
			</div>
		</AnimatedSection>
	);
}
