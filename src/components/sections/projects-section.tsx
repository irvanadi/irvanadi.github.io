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
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/animate-ui/radix/dialog";
import Image from "next/image";
import {
	MotionHighlight,
	MotionHighlightItem,
} from "@/components/animate-ui/effects/motion-highlight";
import { Button } from "../ui/button";
import icAppstore from "~/public/appstore_icon.png";
import icPlaystore from "~/public/playstore_icon.png";
import icEssy from "~/public/essy.png";
import icIntegra from "~/public/integra.jpg";
import icMidsuit from "~/public/midsuit.jpg";

export function ProjectsSection() {
	return (
		<AnimatedSection
			className="relative py-20 px-8 sm:px-20 projects overflow-hidden"
			id="projects"
		>
			{/* Professional background with technology-inspired elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950"></div>
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
				<div className="absolute top-0 right-1/3 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
			</div>
			{/* Circuit-like pattern overlay */}
			<div
				className="absolute inset-0 opacity-[0.015]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0,60 L30,60 L30,30 L60,30 L60,60 L90,60 L90,90 L120,90'/%3E%3Cpath d='M60,0 L60,30 M60,60 L60,90 M60,90 L60,120'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3Ccircle cx='90' cy='90' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
					backgroundSize: "120px 120px",
				}}
			></div>
			<div className="relative max-w-6xl mx-auto">
				<AnimatedElement animation="fadeInUp">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						Featured Projects
					</h2>
				</AnimatedElement>
				<MotionHighlight
					mode="parent"
					hover={true}
					controlledItems={true}
					className="bg-white/5 rounded-lg border border-white/10"
					containerClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<Dialog>
						<DialogTrigger asChild>
							<MotionHighlightItem value="ecommerce">
								<Card className="bg-white/5 border-white/10">
									<CardHeader>
										<CardTitle className="text-white">
											Human Capital Management - ESSY
										</CardTitle>
										<CardDescription className="text-gray-400">
											React Native • Java
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-4">
										<p className="text-gray-300 mb-4">
											A comprehensive cross-platform e-commerce solution built
											with React Native and Java, featuring real-time
											notifications.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
												React Native
											</span>
											<span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">
												Node.js
											</span>
											<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
												PostgreSQL
											</span>
										</div>
									</CardContent>
								</Card>
							</MotionHighlightItem>
						</DialogTrigger>

						<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold text-white mb-4">
									Human Capital Management - ESSY
								</DialogTitle>
								<DialogDescription className="text-gray-300 text-base">
									A comprehensive cross-platform e-commerce solution built with
									React Native and Java, featuring real-time notifications.
								</DialogDescription>
							</DialogHeader>
							<div className="space-y-6">
								<div className="relative rounded-lg overflow-hidden justify-center items-center flex">
									<Image src={icEssy} alt="Human Capital Management - ESSY" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Key Features & Tasks Handled:
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li>• Implemented multiple client feature</li>
										<li>
											• Developed real-time push notifications system for order
											updates
										</li>
										<li>
											• Built offline-first architecture with data
											synchronization
										</li>
										<li>
											• Created responsive UI components following Material
											Design principles
										</li>
										<li>
											• Implemented user authentication and authorization with
											JWT
										</li>
										<li>• Integrated geofence service for attendance</li>
										<li>
											• Optimized app performance achieving 60fps across devices
										</li>
										<li>
											• Implemented deep linking for QR Code Multiple Client
										</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Link Project:
									</h4>
									<div className="flex flex-wrap gap-4">
										<a
											href="https://apps.apple.com/id/app/midsuit-essy/id6748378456"
											className="text-cyan-500 hover:underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button>
												<Image
													src={icAppstore}
													alt="Appstore"
													className="max-w-4"
												/>
												Appstore
											</Button>
										</a>
										<a
											href="https://play.google.com/store/apps/details?id=com.midsuit.essy"
											className="text-cyan-500 hover:underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button>
												<Image
													src={icPlaystore}
													alt="Appstore"
													className="max-w-4"
												/>
												Playstore
											</Button>
										</a>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Technical Stack:
									</h4>
									<div className="flex flex-wrap gap-3">
										<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
											React Native 0.72
										</span>
										<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
											Node.js
										</span>
										<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
											MongoDB
										</span>
										<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
											Express.js
										</span>
										<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
											Redux Toolkit
										</span>
										<span className="bg-yellow-600/20 text-yellow-300 px-3 py-2 rounded-lg">
											Firebase
										</span>
									</div>
								</div>
							</div>
						</DialogContent>
					</Dialog>

					<Dialog>
						<DialogTrigger asChild>
							<MotionHighlightItem value="saas-dashboard">
								<Card className="bg-white/5 border-white/10">
									<CardHeader>
										<CardTitle className="text-white">
											Customer Support Chat System
										</CardTitle>
										<CardDescription className="text-gray-400">
											React.js • Java
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-4">
										<p className="text-gray-300 mb-4">
											Modern web chat system with real-time messaging, user
											management, and role-based access control.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="bg-black/30 text-white px-2 py-1 rounded text-xs">
												React.js
											</span>
											<span className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-xs">
												Java
											</span>
											<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
												PostgreSQL
											</span>
										</div>
									</CardContent>
								</Card>
							</MotionHighlightItem>
						</DialogTrigger>
						<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold text-white mb-4">
									Customer Support Chat System
								</DialogTitle>
								<DialogDescription className="text-gray-300 text-base">
									Enterprise-grade dashboard with advanced analytics and
									multi-tenant architecture
								</DialogDescription>
							</DialogHeader>
							<div className="space-y-6">
								<div className="relative w-full h-64 rounded-lg overflow-hidden">
									<Image
										src={icIntegra}
										alt="SaaS Dashboard Screenshot"
										objectPosition="center"
										className="object-cover"
									/>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Key Features & Tasks Handled:
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li>
											• Implemented multi-tenant architecture with tenant
											isolation
										</li>
										<li>
											• Created role-based access control (RBAC) system with
											fine-grained permissions
										</li>
										<li>
											• Developed REST APIs with comprehensive documentation
											using Swagger
										</li>
										<li>
											• Implemented real-time notifications using WebSocket
											connections
										</li>
										<li>
											• Built automated report generation with PDF export
											functionality
										</li>
										<li>
											• Developed advanced data filtering and search
											capabilities
										</li>
										<li>
											• Implemented caching strategies with Redis for optimal
											performance
										</li>
										<li>
											• Created comprehensive audit logging and compliance
											features
										</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Technical Stack:
									</h4>
									<div className="flex flex-wrap gap-3">
										<span className="bg-black/30 text-white px-3 py-2 rounded-lg">
											React.js
										</span>
										<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
											Java
										</span>
										<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
											PostgreSQL
										</span>
										<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
											Redis
										</span>
										<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
											Docker
										</span>
									</div>
								</div>
							</div>
						</DialogContent>
					</Dialog>

					<Dialog>
						<DialogTrigger asChild>
							<MotionHighlightItem value="midsuit-landing">
								<Card className="bg-white/5 border-white/10">
									<CardHeader>
										<CardTitle className="text-white">
											MidSuit Landing Page
										</CardTitle>
										<CardDescription className="text-gray-400">
											Next.js • TypeScript • Tailwind
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-4">
										<p className="text-gray-300 mb-4">
											Modern, responsive landing page for MidSuit business
											solutions with advanced animations and optimized
											performance.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="bg-black/30 text-white px-2 py-1 rounded text-xs">
												Next.js
											</span>
											<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
												TypeScript
											</span>
											<span className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded text-xs">
												Tailwind CSS
											</span>
										</div>
									</CardContent>
								</Card>
							</MotionHighlightItem>
						</DialogTrigger>

						<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold text-white mb-4">
									MIDSUIT Landing Page
								</DialogTitle>
								<DialogDescription className="text-gray-300 text-base">
									Modern, high-converting landing page for MIDSUIT business
									solutions platform
								</DialogDescription>
							</DialogHeader>
							<div className="space-y-6">
								<div className="relative rounded-lg overflow-hidden justify-center items-center flex">
									{/* Placeholder for MIDSUIT landing page screenshot */}
									<Image src={icMidsuit} alt="MIDSUIT Landing Page" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Key Features & Tasks Handled:
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li>
											• Designed and developed responsive landing page with
											modern UI/UX principles
										</li>
										<li>
											• Implemented advanced scroll-triggered animations using
											Framer Motion
										</li>
										<li>
											• Built interactive hero section with dynamic
											call-to-action buttons
										</li>
										<li>
											• Created modular component system for easy content
											management
										</li>
										<li>
											• Developed services showcase with hover effects and
											detailed modals
										</li>
										<li>
											• Integrated contact forms with validation and email
											submission
										</li>
										<li>
											• Implemented SEO optimization with meta tags and
											structured data
										</li>
										<li>
											• Built testimonials carousel with auto-play and manual
											controls
										</li>
										<li>
											• Created pricing tables with interactive feature
											comparisons
										</li>
										<li>
											• Optimized performance achieving 95+ Lighthouse scores
										</li>
										<li>• Implemented dark/light theme toggle functionality</li>
										<li>• Added progressive web app (PWA) capabilities</li>
										<li>
											• Built analytics integration for user behavior tracking
										</li>
										<li>• Created multi-language support with i18n</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Technical Stack:
									</h4>
									<div className="flex flex-wrap gap-3">
										<span className="bg-black/30 text-white px-3 py-2 rounded-lg">
											Next.js 14
										</span>
										<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
											TypeScript
										</span>
										<span className="bg-cyan-600/20 text-cyan-300 px-3 py-2 rounded-lg">
											Tailwind CSS
										</span>
										<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
											Framer Motion
										</span>
										<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
											React Hook Form
										</span>
										<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
											Vercel
										</span>
										<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
											EmailJS
										</span>
									</div>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Performance & Features:
									</h4>
									<div className="grid md:grid-cols-2 gap-4">
										<div className="bg-white/5 p-4 rounded-lg">
											<h5 className="text-white font-medium mb-2">
												Performance
											</h5>
											<ul className="text-gray-300 text-sm space-y-1">
												<li>• 95+ Lighthouse Score</li>
												<li>• Under 2s Load Time</li>
												<li>• Optimized Images</li>
												<li>• Lazy Loading</li>
											</ul>
										</div>
										<div className="bg-white/5 p-4 rounded-lg">
											<h5 className="text-white font-medium mb-2">Features</h5>
											<ul className="text-gray-300 text-sm space-y-1">
												<li>• Responsive Design</li>
												<li>• SEO Optimized</li>
												<li>• PWA Ready</li>
												<li>• Analytics Ready</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</DialogContent>
					</Dialog>
				</MotionHighlight>
			</div>
		</AnimatedSection>
	);
}
