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
