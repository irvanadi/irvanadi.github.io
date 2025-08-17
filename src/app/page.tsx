"use client";

import { Header } from "@/components/customize/header";
import {
	HeroSection,
	AboutSection,
	SkillsSection,
	ExperienceSection,
	ProjectsSection,
	ContactSection,
} from "@/components/sections";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 snap-mandatory scroll-smooth  overflow-y-auto">
			<Header />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
// 	<AnimatedSection
// 		className="py-20 px-8 sm:px-20 bg-black/20 snap-center about"
// 		id="about"
// 		stagger={true}
// 		delay={0.2}
// 	>
// 		<div className="max-w-6xl mx-auto">
// 			<AnimatedElement animation="fadeInUp">
// 				<h2 className="text-4xl font-bold text-white text-center mb-16">
// 					About Me
// 				</h2>
// 			</AnimatedElement>
// 			<div className="grid md:grid-cols-2 gap-12 items-center">
// 				<div>
// 					<AnimatedElement animation="fadeInLeft" delay={0.3}>
// 						<p className="text-gray-300 text-lg leading-relaxed mb-6">
// 							I&apos;m a dedicated frontend developer with 3 years of
// 							hands-on experience building scalable web and mobile
// 							applications. My journey began with a passion for creating
// 							intuitive user interfaces and has evolved into expertise
// 							across the full development stack.
// 						</p>
// 					</AnimatedElement>
// 					<AnimatedElement animation="fadeInLeft" delay={0.5}>
// 						<p className="text-gray-300 text-lg leading-relaxed">
// 							I specialize in React Native for cross-platform mobile
// 							development, Next.js for high-performance web applications,
// 							and have strong backend skills with Java and Node.js to create
// 							end-to-end solutions.
// 						</p>
// 					</AnimatedElement>
// 				</div>
// 				<MotionHighlight
// 					mode="parent"
// 					hover={true}
// 					containerClassName="space-y-2"
// 					controlledItems
// 					className="bg-white/5 rounded-lg border border-white/10"
// 				>
// 					<MotionHighlightItem>
// 						<AnimatedElement animation="fadeInRight" delay={0.4}>
// 							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
// 								<h3 className="text-white font-semibold text-xl mb-2">
// 									Frontend Focus
// 								</h3>
// 								<p className="text-gray-400">
// 									React, React Native, Next.js, TypeScript
// 								</p>
// 							</div>
// 						</AnimatedElement>
// 					</MotionHighlightItem>

// 					<MotionHighlightItem>
// 						<AnimatedElement animation="fadeInRight" delay={0.6}>
// 							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
// 								<h3 className="text-white font-semibold text-xl mb-2">
// 									Backend Skills
// 								</h3>
// 								<p className="text-gray-400">
// 									Node.js, Java, REST APIs, Database Design
// 								</p>
// 							</div>
// 						</AnimatedElement>
// 					</MotionHighlightItem>
// 					<MotionHighlightItem>
// 						<AnimatedElement animation="fadeInRight" delay={0.8}>
// 							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
// 								<h3 className="text-white font-semibold text-xl mb-2">
// 									Experience
// 								</h3>
// 								<p className="text-gray-400">
// 									3+ Years in Frontend Development
// 								</p>
// 							</div>
// 						</AnimatedElement>
// 					</MotionHighlightItem>
// 				</MotionHighlight>
// 			</div>
// 		</div>
// 	</AnimatedSection>

// 	{/* Skills Section */}
// 	<AnimatedSection className="py-20 px-8 sm:px-20 snap-center" id="skills">
// 		<div className="max-w-6xl mx-auto">
// 			<AnimatedElement animation="fadeInUp">
// 				<h2 className="text-4xl font-bold text-white text-center mb-16">
// 					Technical Skills
// 				</h2>
// 			</AnimatedElement>
// 			<MotionHighlight
// 				mode={"parent"}
// 				hover={true}
// 				containerClassName="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
// 				className="bg-white/5 rounded-lg border border-white/10"
// 				controlledItems
// 			>
// 				<MotionHighlightItem className="grid-cols-9">
// 					<AnimatedElement
// 						animation="scaleIn"
// 						delay={0.2}
// 						className="grid-cols-9"
// 					>
// 						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col grid-cols-8">
// 							<CardHeader>
// 								<CardTitle className="text-white">
// 									Mobile Development
// 								</CardTitle>
// 								<CardDescription className="text-gray-400">
// 									Cross-platform mobile apps
// 								</CardDescription>
// 							</CardHeader>
// 							<CardContent className="pt-4 flex-1 flex flex-col justify-between">
// 								<ul className="space-y-2 text-gray-300">
// 									<li>• React Native</li>
// 									<li>• Expo</li>
// 									<li>• React Navigation</li>
// 									<li>• Native Modules</li>
// 								</ul>
// 							</CardContent>
// 						</Card>
// 					</AnimatedElement>
// 				</MotionHighlightItem>
// 				<MotionHighlightItem>
// 					<AnimatedElement animation="scaleIn" delay={0.4}>
// 						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
// 							<CardHeader>
// 								<CardTitle className="text-white">
// 									Web Development
// 								</CardTitle>
// 								<CardDescription className="text-gray-400">
// 									Modern web applications
// 								</CardDescription>
// 							</CardHeader>
// 							<CardContent className="pt-4 flex-1 flex flex-col justify-between">
// 								<ul className="space-y-2 text-gray-300">
// 									<li>• Next.js</li>
// 									<li>• React</li>
// 									<li>• TypeScript</li>
// 									<li>• Tailwind CSS</li>
// 								</ul>
// 							</CardContent>
// 						</Card>
// 					</AnimatedElement>
// 				</MotionHighlightItem>
// 				<MotionHighlightItem>
// 					<AnimatedElement animation="scaleIn" delay={0.6}>
// 						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
// 							<CardHeader>
// 								<CardTitle className="text-white">
// 									Backend Development
// 								</CardTitle>
// 								<CardDescription className="text-gray-400">
// 									Server-side technologies
// 								</CardDescription>
// 							</CardHeader>
// 							<CardContent className="pt-4 flex-1 flex flex-col justify-between">
// 								<ul className="space-y-2 text-gray-300">
// 									<li>• Node.js</li>
// 									<li>• Java</li>
// 									<li>• Express.js</li>
// 									<li>• RESTful APIs</li>
// 								</ul>
// 							</CardContent>
// 						</Card>
// 					</AnimatedElement>
// 				</MotionHighlightItem>
// 				<MotionHighlightItem>
// 					<AnimatedElement animation="scaleIn" delay={0.8}>
// 						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
// 							<CardHeader>
// 								<CardTitle className="text-white">Tools & Others</CardTitle>
// 								<CardDescription className="text-gray-400">
// 									Development ecosystem
// 								</CardDescription>
// 							</CardHeader>
// 							<CardContent className="pt-4 flex-1 flex flex-col justify-between">
// 								<ul className="space-y-2 text-gray-300">
// 									<li>• Git</li>
// 									<li>• Firebase</li>
// 									<li>• PostgreSQL</li>
// 									<li>• Oracle</li>
// 								</ul>
// 							</CardContent>
// 						</Card>
// 					</AnimatedElement>
// 				</MotionHighlightItem>
// 			</MotionHighlight>
// 		</div>
// 	</AnimatedSection>

// 	{/* Experience Section */}
// 	<AnimatedSection
// 		className="py-20 px-8 sm:px-20 bg-black/20 snap-center"
// 		id="experience"
// 	>
// 		<div className="max-w-4xl mx-auto">
// 			<AnimatedElement animation="fadeInUp">
// 				<h2 className="text-4xl font-bold text-white text-center mb-16">
// 					Professional Experience
// 				</h2>
// 			</AnimatedElement>
// 			<AnimatedElement animation="fadeInUp" delay={0.3}>
// 				<Accordion
// 					type="single"
// 					collapsible
// 					className="w-full space-y-4"
// 					defaultValue="react-native-dev"
// 				>
// 					<AccordionItem
// 						value="react-native-dev"
// 						className="bg-white/5 rounded-lg border border-white/10 px-6"
// 					>
// 						<AccordionTrigger className="text-white hover:text-cyan-400 py-6">
// 							<div className="text-left">
// 								<h3 className="text-xl font-bold">
// 									React Native Developer
// 								</h3>
// 								<p className="text-cyan-400 text-sm mt-1">2024 - Present</p>
// 							</div>
// 						</AccordionTrigger>
// 						<AccordionContent className="text-gray-300 pb-6">
// 							<ul className="space-y-2 mt-4">
// 								<li>
// 									• Leading React Native mobile app development with latest
// 									technologies
// 								</li>
// 								<li>
// 									• Implementing cross-platform solutions for iOS and
// 									Android
// 								</li>
// 								<li>• Optimizing app performance and user experience</li>
// 								<li>
// 									• Mentoring junior developers and conducting code reviews
// 								</li>
// 								<li>
// 									• Integrating native modules and third-party libraries
// 								</li>
// 							</ul>
// 						</AccordionContent>
// 					</AccordionItem>

// 					<AccordionItem
// 						value="frontend-dev"
// 						className="bg-white/5 rounded-lg border border-white/10 px-6"
// 					>
// 						<AccordionTrigger className="text-white hover:text-cyan-400 py-6">
// 							<div className="text-left">
// 								<h3 className="text-xl font-bold">Fullstack Developer</h3>
// 								<p className="text-cyan-400 text-sm mt-1">
// 									2022 - Present (3 Years)
// 								</p>
// 							</div>
// 						</AccordionTrigger>
// 						<AccordionContent className="text-gray-300 pb-6">
// 							<ul className="space-y-2 mt-4">
// 								<li>
// 									• Developed and maintained React Native mobile
// 									applications serving 10,000+ users
// 								</li>
// 								<li>
// 									• Built responsive web applications using Next.js with
// 									server-side rendering
// 								</li>
// 								<li>
// 									• Collaborated with backend teams to integrate Java and
// 									Node.js APIs
// 								</li>
// 								<li>
// 									• Implemented modern UI/UX designs with focus on
// 									performance and accessibility
// 								</li>
// 								<li>
// 									• Optimized application performance resulting in 40%
// 									faster load times
// 								</li>
// 							</ul>
// 						</AccordionContent>
// 					</AccordionItem>
// 				</Accordion>
// 			</AnimatedElement>
// 		</div>
// 	</AnimatedSection>

// 	{/* Featured Projects Section */}
// 	<AnimatedSection className="py-20 px-8 sm:px-20 projects" id="projects">
// 		<div className="max-w-6xl mx-auto">
// 			<AnimatedElement animation="fadeInUp">
// 				<h2 className="text-4xl font-bold text-white text-center mb-16">
// 					Featured Projects
// 				</h2>
// 			</AnimatedElement>
// 			<MotionHighlight
// 				mode="parent"
// 				hover={true}
// 				controlledItems={true}
// 				className="bg-white/5 rounded-lg border border-white/10"
// 				containerClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// 			>
// 				<Dialog>
// 					<DialogTrigger asChild>
// 						<MotionHighlightItem value="ecommerce">
// 							<Card className="bg-white/5 border-white/10">
// 								<CardHeader>
// 									<CardTitle className="text-white">
// 										E-Commerce Mobile App
// 									</CardTitle>
// 									<CardDescription className="text-gray-400">
// 										React Native • Node.js
// 									</CardDescription>
// 								</CardHeader>
// 								<CardContent className="pt-4">
// 									<p className="text-gray-300 mb-4">
// 										Cross-platform mobile app with payment integration,
// 										real-time notifications, and offline capabilities.
// 									</p>
// 									<div className="flex flex-wrap gap-2">
// 										<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
// 											React Native
// 										</span>
// 										<span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">
// 											Node.js
// 										</span>
// 										<span className="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-xs">
// 											MongoDB
// 										</span>
// 									</div>
// 								</CardContent>
// 							</Card>
// 						</MotionHighlightItem>
// 					</DialogTrigger>

// 					<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
// 						<DialogHeader>
// 							<DialogTitle className="text-2xl font-bold text-white mb-4">
// 								E-Commerce Mobile App
// 							</DialogTitle>
// 							<DialogDescription className="text-gray-300 text-base">
// 								A comprehensive cross-platform e-commerce solution built
// 								with React Native
// 							</DialogDescription>
// 						</DialogHeader>
// 						<div className="space-y-6">
// 							<div className="relative w-full h-64 rounded-lg overflow-hidden">
// 								<Image
// 									src="/projects/ecommerce-app.svg"
// 									alt="E-Commerce Mobile App Screenshot"
// 									fill
// 									className="object-cover"
// 								/>
// 							</div>
// 							<div>
// 								<h4 className="text-lg font-semibold text-white mb-3">
// 									Key Features & Tasks Handled:
// 								</h4>
// 								<ul className="space-y-2 text-gray-300">
// 									<li>
// 										• Implemented secure payment gateway integration with
// 										Stripe and PayPal
// 									</li>
// 									<li>
// 										• Developed real-time push notifications system for
// 										order updates
// 									</li>
// 									<li>
// 										• Built offline-first architecture with data
// 										synchronization
// 									</li>
// 									<li>
// 										• Created responsive UI components following Material
// 										Design principles
// 									</li>
// 									<li>
// 										• Implemented user authentication and authorization with
// 										JWT
// 									</li>
// 									<li>
// 										• Developed product catalog with advanced filtering and
// 										search
// 									</li>
// 									<li>
// 										• Built shopping cart functionality with persistent
// 										storage
// 									</li>
// 									<li>
// 										• Integrated location services for delivery tracking
// 									</li>
// 									<li>
// 										• Optimized app performance achieving 60fps across
// 										devices
// 									</li>
// 									<li>• Implemented deep linking for product sharing</li>
// 								</ul>
// 							</div>
// 							<div>
// 								<h4 className="text-lg font-semibold text-white mb-3">
// 									Technical Stack:
// 								</h4>
// 								<div className="flex flex-wrap gap-3">
// 									<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
// 										React Native 0.72
// 									</span>
// 									<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
// 										Node.js
// 									</span>
// 									<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
// 										MongoDB
// 									</span>
// 									<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
// 										Express.js
// 									</span>
// 									<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
// 										Redux Toolkit
// 									</span>
// 									<span className="bg-yellow-600/20 text-yellow-300 px-3 py-2 rounded-lg">
// 										Firebase
// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 					</DialogContent>
// 				</Dialog>

// 				<Dialog>
// 					<DialogTrigger asChild>
// 						<MotionHighlightItem value="saas-dashboard">
// 							<Card className="bg-white/5 border-white/10">
// 								<CardHeader>
// 									<CardTitle className="text-white">
// 										SaaS Dashboard
// 									</CardTitle>
// 									<CardDescription className="text-gray-400">
// 										Next.js • Java Spring Boot
// 									</CardDescription>
// 								</CardHeader>
// 								<CardContent className="pt-4">
// 									<p className="text-gray-300 mb-4">
// 										Modern web dashboard with real-time analytics, user
// 										management, and role-based access control.
// 									</p>
// 									<div className="flex flex-wrap gap-2">
// 										<span className="bg-black/30 text-white px-2 py-1 rounded text-xs">
// 											Next.js
// 										</span>
// 										<span className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-xs">
// 											Java
// 										</span>
// 										<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
// 											PostgreSQL
// 										</span>
// 									</div>
// 								</CardContent>
// 							</Card>
// 						</MotionHighlightItem>
// 					</DialogTrigger>
// 					<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
// 						<DialogHeader>
// 							<DialogTitle className="text-2xl font-bold text-white mb-4">
// 								SaaS Dashboard Platform
// 							</DialogTitle>
// 							<DialogDescription className="text-gray-300 text-base">
// 								Enterprise-grade dashboard with advanced analytics and
// 								multi-tenant architecture
// 							</DialogDescription>
// 						</DialogHeader>
// 						<div className="space-y-6">
// 							<div className="relative w-full h-64 rounded-lg overflow-hidden">
// 								<Image
// 									src="/projects/saas-dashboard.svg"
// 									alt="SaaS Dashboard Screenshot"
// 									fill
// 									className="object-cover"
// 								/>
// 							</div>
// 							<div>
// 								<h4 className="text-lg font-semibold text-white mb-3">
// 									Key Features & Tasks Handled:
// 								</h4>
// 								<ul className="space-y-2 text-gray-300">
// 									<li>
// 										• Developed microservices architecture with Spring Boot
// 										and Spring Cloud
// 									</li>
// 									<li>
// 										• Built real-time analytics dashboard with Chart.js and
// 										D3.js
// 									</li>
// 									<li>
// 										• Implemented multi-tenant SaaS architecture with tenant
// 										isolation
// 									</li>
// 									<li>
// 										• Created role-based access control (RBAC) system with
// 										fine-grained permissions
// 									</li>
// 									<li>
// 										• Developed REST APIs with comprehensive documentation
// 										using Swagger
// 									</li>
// 									<li>
// 										• Implemented real-time notifications using WebSocket
// 										connections
// 									</li>
// 									<li>
// 										• Built automated report generation with PDF export
// 										functionality
// 									</li>
// 									<li>
// 										• Developed advanced data filtering and search
// 										capabilities
// 									</li>
// 									<li>
// 										• Implemented caching strategies with Redis for optimal
// 										performance
// 									</li>
// 									<li>
// 										• Created comprehensive audit logging and compliance
// 										features
// 									</li>
// 								</ul>
// 							</div>
// 							<div>
// 								<h4 className="text-lg font-semibold text-white mb-3">
// 									Technical Stack:
// 								</h4>
// 								<div className="flex flex-wrap gap-3">
// 									<span className="bg-black/30 text-white px-3 py-2 rounded-lg">
// 										Next.js 14
// 									</span>
// 									<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
// 										Java Spring Boot
// 									</span>
// 									<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
// 										PostgreSQL
// 									</span>
// 									<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
// 										Spring Security
// 									</span>
// 									<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
// 										Redis
// 									</span>
// 									<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
// 										Docker
// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 					</DialogContent>
// 				</Dialog>

// 				<Dialog>
// 					<DialogTrigger asChild>
// 						<MotionHighlightItem value="chat-app">
// 							<Card className="bg-white/5 border-white/10">
// 								<CardHeader>
// 									<CardTitle className="text-white">
// 										Real-time Chat App
// 									</CardTitle>
// 									<CardDescription className="text-gray-400">
// 										React Native • Node.js
// 									</CardDescription>
// 								</CardHeader>
// 								<CardContent className="pt-4">
// 									<p className="text-gray-300 mb-4">
// 										Real-time messaging app with group chats, file sharing,
// 										and push notifications.
// 									</p>
// 									<div className="flex flex-wrap gap-2">
// 										<span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
// 											React Native
// 										</span>
// 										<span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">
// 											Socket.io
// 										</span>
// 										<span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
// 											Node.js
// 										</span>
// 									</div>
// 								</CardContent>
// 							</Card>
// 						</MotionHighlightItem>
// 					</DialogTrigger>
// 					<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
// 						<DialogHeader>
// 							<DialogTitle className="text-2xl font-bold text-white mb-4">
// 								Real-time Chat Application
// 							</DialogTitle>
// 							<DialogDescription className="text-gray-300 text-base">
// 								Feature-rich messaging platform with advanced real-time
// 								capabilities
// 							</DialogDescription>
// 						</DialogHeader>
// 						<div className="space-y-6">
// 							<div className="relative w-full h-64 rounded-lg overflow-hidden">
// 								<Image
// 									src="/projects/chat-app.svg"
// 									alt="Real-time Chat App Screenshot"
// 									fill
// 									className="object-cover"
// 								/>
// 							</div>
// 							<div>
// 								<h4 className="text-lg font-semibold text-white mb-3">
// 									Key Features & Tasks Handled:
// 								</h4>
// 								<ul className="space-y-2 text-gray-300">
// 									<li>
// 										• Implemented real-time messaging using Socket.IO with
// 										message queuing
// 									</li>
// 									<li>
// 										• Built group chat functionality with admin controls and
// 										member management
// 									</li>
// 									<li>
// 										• Developed file sharing system with support for images,
// 										videos, and documents
// 									</li>
// 									<li>
// 										• Created push notification system for offline message
// 										delivery
// 									</li>
// 									<li>
// 										• Implemented message encryption for enhanced security
// 									</li>
// 									<li>
// 										• Built typing indicators and read receipts for better
// 										user experience
// 									</li>
// 									<li>
// 										• Developed voice message recording and playback
// 										functionality
// 									</li>
// 									<li>
// 										• Created emoji reactions and message threading features
// 									</li>
// 									<li>
// 										• Implemented user presence tracking (online/offline
// 										status)
// 									</li>
// 									<li>
// 										• Built message search and conversation history features
// 									</li>
// 								</ul>
// 							</div>
// 							<div>
// 								<h4 className="text-lg font-semibent text-white mb-3">
// 									Technical Stack:
// 								</h4>
// 								<div className="flex flex-wrap gap-3">
// 									<span className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg">
// 										React Native
// 									</span>
// 									<span className="bg-green-600/20 text-green-300 px-3 py-2 rounded-lg">
// 										Socket.io
// 									</span>
// 									<span className="bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg">
// 										Node.js
// 									</span>
// 									<span className="bg-orange-600/20 text-orange-300 px-3 py-2 rounded-lg">
// 										MongoDB
// 									</span>
// 									<span className="bg-yellow-600/20 text-yellow-300 px-3 py-2 rounded-lg">
// 										Firebase Cloud Messaging
// 									</span>
// 									<span className="bg-red-600/20 text-red-300 px-3 py-2 rounded-lg">
// 										AWS S3
// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 					</DialogContent>
// 				</Dialog>
// 			</MotionHighlight>
// 		</div>
// 	</AnimatedSection>

// 	{/* Contact Section */}
// 	<AnimatedSection className="py-20 px-8 sm:px-20 bg-black/20">
// 		<div className="max-w-4xl mx-auto text-center">
// 			<AnimatedElement animation="fadeInUp">
// 				<h2 className="text-4xl font-bold text-white mb-8">
// 					Let&apos;s Work Together
// 				</h2>
// 			</AnimatedElement>
// 			<AnimatedElement animation="fadeInUp" delay={0.3}>
// 				<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
// 					I&apos;m always interested in new opportunities and exciting
// 					projects. Let&apos;s discuss how we can bring your ideas to life.
// 				</p>
// 			</AnimatedElement>
// 			<AnimatedElement animation="fadeInUp" delay={0.5}>
// 				<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 					<Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
// 						Get In Touch
// 					</Button>
// 					<Button
// 						variant="outline"
// 						className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
// 					>
// 						Download Resume
// 					</Button>
// 				</div>
// 			</AnimatedElement>
// 		</div>
// 	</AnimatedSection>
// </div>
// 	);
// }
