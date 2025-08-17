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

export function ProjectsSection() {
	return (
		<AnimatedSection className="py-20 px-8 sm:px-20 projects" id="projects">
			<div className="max-w-6xl mx-auto">
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
											E-Commerce Mobile App
										</CardTitle>
										<CardDescription className="text-gray-400">
											React Native • Node.js
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-4">
										<p className="text-gray-300 mb-4">
											Cross-platform mobile app with payment integration,
											real-time notifications, and offline capabilities.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
												React Native
											</span>
											<span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">
												Node.js
											</span>
											<span className="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-xs">
												MongoDB
											</span>
										</div>
									</CardContent>
								</Card>
							</MotionHighlightItem>
						</DialogTrigger>

						<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold text-white mb-4">
									E-Commerce Mobile App
								</DialogTitle>
								<DialogDescription className="text-gray-300 text-base">
									A comprehensive cross-platform e-commerce solution built with
									React Native
								</DialogDescription>
							</DialogHeader>
							<div className="space-y-6">
								<div className="relative w-full h-64 rounded-lg overflow-hidden">
									<Image
										src="/projects/ecommerce-app.svg"
										alt="E-Commerce Mobile App Screenshot"
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Key Features & Tasks Handled:
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li>
											• Implemented secure payment gateway integration with
											Stripe and PayPal
										</li>
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
										<li>
											• Developed product catalog with advanced filtering and
											search
										</li>
										<li>
											• Built shopping cart functionality with persistent
											storage
										</li>
										<li>
											• Integrated location services for delivery tracking
										</li>
										<li>
											• Optimized app performance achieving 60fps across devices
										</li>
										<li>• Implemented deep linking for product sharing</li>
									</ul>
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
										<CardTitle className="text-white">SaaS Dashboard</CardTitle>
										<CardDescription className="text-gray-400">
											Next.js • Java Spring Boot
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-4">
										<p className="text-gray-300 mb-4">
											Modern web dashboard with real-time analytics, user
											management, and role-based access control.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="bg-black/30 text-white px-2 py-1 rounded text-xs">
												Next.js
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
									SaaS Dashboard Platform
								</DialogTitle>
								<DialogDescription className="text-gray-300 text-base">
									Enterprise-grade dashboard with advanced analytics and
									multi-tenant architecture
								</DialogDescription>
							</DialogHeader>
							<div className="space-y-6">
								<div className="relative w-full h-64 rounded-lg overflow-hidden">
									<Image
										src="/projects/saas-dashboard.svg"
										alt="SaaS Dashboard Screenshot"
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Key Features & Tasks Handled:
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li>
											• Developed microservices architecture with Spring Boot
											and Spring Cloud
										</li>
										<li>
											• Built real-time analytics dashboard with Chart.js and
											D3.js
										</li>
										<li>
											• Implemented multi-tenant SaaS architecture with tenant
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
											Next.js 14
										</span>
										<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
											Java Spring Boot
										</span>
										<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
											PostgreSQL
										</span>
										<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
											Spring Security
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
							<MotionHighlightItem value="chat-app">
								<Card className="bg-white/5 border-white/10">
									<CardHeader>
										<CardTitle className="text-white">
											Real-time Chat App
										</CardTitle>
										<CardDescription className="text-gray-400">
											React Native • Node.js
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-4">
										<p className="text-gray-300 mb-4">
											Real-time messaging app with group chats, file sharing,
											and push notifications.
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
												React Native
											</span>
											<span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">
												Socket.io
											</span>
											<span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
												Node.js
											</span>
										</div>
									</CardContent>
								</Card>
							</MotionHighlightItem>
						</DialogTrigger>
						<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold text-white mb-4">
									Real-time Chat Application
								</DialogTitle>
								<DialogDescription className="text-gray-300 text-base">
									Feature-rich messaging platform with advanced real-time
									capabilities
								</DialogDescription>
							</DialogHeader>
							<div className="space-y-6">
								<div className="relative w-full h-64 rounded-lg overflow-hidden">
									<Image
										src="/projects/chat-app.svg"
										alt="Real-time Chat App Screenshot"
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Key Features & Tasks Handled:
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li>
											• Implemented real-time messaging using Socket.IO with
											message queuing
										</li>
										<li>
											• Built group chat functionality with admin controls and
											member management
										</li>
										<li>
											• Developed file sharing system with support for images,
											videos, and documents
										</li>
										<li>
											• Created push notification system for offline message
											delivery
										</li>
										<li>
											• Implemented message encryption for enhanced security
										</li>
										<li>
											• Built typing indicators and read receipts for better
											user experience
										</li>
										<li>
											• Developed voice message recording and playback
											functionality
										</li>
										<li>
											• Created emoji reactions and message threading features
										</li>
										<li>
											• Implemented user presence tracking (online/offline
											status)
										</li>
										<li>
											• Built message search and conversation history features
										</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">
										Technical Stack:
									</h4>
									<div className="flex flex-wrap gap-3">
										<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
											React Native
										</span>
										<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
											Socket.io
										</span>
										<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
											Node.js
										</span>
										<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
											MongoDB
										</span>
										<span className="bg-yellow-600/20 text-yellow-300 px-3 py-2 rounded-lg">
											Firebase Cloud Messaging
										</span>
										<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
											AWS S3
										</span>
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
