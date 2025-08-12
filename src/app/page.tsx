import { Header } from "@/components/ui/header";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 snap-mandatory scroll-smooth overflow-y-auto">
			<Header />

			{/* Hero Section */}
			<section className="pt-32 pb-20 px-8 sm:px-20 snap-center">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
						Frontend Developer
					</h1>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Passionate frontend developer with 3 years of experience creating
						engaging, responsive web and mobile applications using modern
						technologies.
					</p>
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
					<Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
						View My Work
					</Button>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 px-8 sm:px-20 bg-black/20 snap-center">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						About Me
					</h2>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<p className="text-gray-300 text-lg leading-relaxed mb-6">
								I&apos;m a dedicated frontend developer with 3 years of hands-on
								experience building scalable web and mobile applications. My
								journey began with a passion for creating intuitive user
								interfaces and has evolved into expertise across the full
								development stack.
							</p>
							<p className="text-gray-300 text-lg leading-relaxed">
								I specialize in React Native for cross-platform mobile
								development, Next.js for high-performance web applications, and
								have strong backend skills with Java and Node.js to create
								end-to-end solutions.
							</p>
						</div>
						<div className="space-y-6">
							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
								<h3 className="text-white font-semibold text-xl mb-2">
									Frontend Focus
								</h3>
								<p className="text-gray-400">
									React, React Native, Next.js, TypeScript
								</p>
							</div>
							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
								<h3 className="text-white font-semibold text-xl mb-2">
									Backend Skills
								</h3>
								<p className="text-gray-400">
									Node.js, Java, REST APIs, Database Design
								</p>
							</div>
							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
								<h3 className="text-white font-semibold text-xl mb-2">
									Experience
								</h3>
								<p className="text-gray-400">
									3+ Years in Frontend Development
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-20 px-8 sm:px-20 snap-center">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						Technical Skills
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
							<CardHeader>
								<CardTitle className="text-white">Mobile Development</CardTitle>
								<CardDescription className="text-gray-400">
									Cross-platform mobile apps
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-4">
								<ul className="space-y-2 text-gray-300">
									<li>• React Native</li>
									<li>• Expo</li>
									<li>• React Navigation</li>
									<li>• Native Modules</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
							<CardHeader>
								<CardTitle className="text-white">Web Development</CardTitle>
								<CardDescription className="text-gray-400">
									Modern web applications
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-4">
								<ul className="space-y-2 text-gray-300">
									<li>• Next.js</li>
									<li>• React</li>
									<li>• TypeScript</li>
									<li>• Tailwind CSS</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
							<CardHeader>
								<CardTitle className="text-white">
									Backend Development
								</CardTitle>
								<CardDescription className="text-gray-400">
									Server-side technologies
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-4">
								<ul className="space-y-2 text-gray-300">
									<li>• Node.js</li>
									<li>• Java</li>
									<li>• Express.js</li>
									<li>• RESTful APIs</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
							<CardHeader>
								<CardTitle className="text-white">Tools & Others</CardTitle>
								<CardDescription className="text-gray-400">
									Development ecosystem
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-4">
								<ul className="space-y-2 text-gray-300">
									<li>• Git</li>
									<li>• MongoDB</li>
									<li>• PostgreSQL</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="py-20 px-8 sm:px-20 bg-black/20 snap-center">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						Professional Experience
					</h2>
					<div className="space-y-12">
						<div className="border-l-4 border-cyan-500 pl-8">
							<div className="bg-white/5 p-6 rounded-lg border border-white/10">
								<h3 className="text-2xl font-bold text-white mb-2">
									Frontend Developer
								</h3>
								<p className="text-cyan-400 mb-4">2022 - Present (3 Years)</p>
								<ul className="space-y-2 text-gray-300">
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
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Projects Section */}
			<section className="py-20 px-8 sm:px-20">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-white text-center mb-16">
						Featured Projects
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all hover:scale-105">
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
									Cross-platform mobile app with payment integration, real-time
									notifications, and offline capabilities.
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

						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all hover:scale-105">
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

						<Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all hover:scale-105">
							<CardHeader>
								<CardTitle className="text-white">Real-time Chat App</CardTitle>
								<CardDescription className="text-gray-400">
									React Native • Node.js
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-4">
								<p className="text-gray-300 mb-4">
									Real-time messaging app with group chats, file sharing, and
									push notifications.
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
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-8 sm:px-20 bg-black/20">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-8">
						Let&apos;s Work Together
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
						I&apos;m always interested in new opportunities and exciting
						projects. Let&apos;s discuss how we can bring your ideas to life.
					</p>
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
				</div>
			</section>
		</div>
	);
}
