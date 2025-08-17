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
			className="relative py-20 px-8 sm:px-20 snap-center about overflow-hidden"
			id="about"
			stagger={true}
			delay={0.2}
		>
			{/* Professional background with subtle texture */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-gray-900/95"></div>
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(167,139,250,0.1),transparent_50%)]"></div>
			</div>
			{/* Subtle pattern overlay */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			></div>
			<div className="relative max-w-6xl mx-auto">
				<AnimatedElement animation="fadeInUp">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						About Me
					</h2>
				</AnimatedElement>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<AnimatedElement animation="fadeInLeft" delay={0.3}>
							<p className="text-gray-300 text-lg leading-relaxed mb-6">
								Hi I&apos;m Irvan Adi Santoso an dedicated technical consultant
								& software developer with 2+ years of hands-on experience
								building scalable web and mobile applications. My journey began
								with a passion for creating intuitive user interfaces and has
								evolved into expertise across the full development stack.
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
										2+ Years in Frontend Development
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
