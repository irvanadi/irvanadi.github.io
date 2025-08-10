import React from "react";

const Content: React.FC<React.ComponentProps<"div">> = ({
	className,
	...props
}) => {
	return (
		<div className={`"max-w-4xl mx-auto p-8 ${className}`} {...props}>
			<section id="about" className="mb-16">
				<h2 className="text-3xl font-bold mb-4">About Me</h2>
				<p className="text-lg">
					I am a passionate front-end developer with 3 years of
					experience building beautiful and performant applications.
					My expertise lies in React Native and Next.js, allowing me
					to create seamless user experiences for both mobile and web
					platforms. I am also proficient in backend development with
					Java and Node.js, enabling me to build full-stack solutions.
				</p>
			</section>

			<section id="skills" className="mb-16">
				<h2 className="text-3xl font-bold mb-4">Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">React Native</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">Next.js</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">JavaScript</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">TypeScript</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">Java</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">Node.js</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">HTML5</h3>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<h3 className="font-bold">CSS3</h3>
					</div>
				</div>
			</section>

			<section id="projects" className="mb-16">
				<h2 className="text-3xl font-bold mb-4">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Project 1 */}
					<div className="bg-gray-100 p-6 rounded-lg">
						<h3 className="text-xl font-bold mb-2">
							Project Title 1
						</h3>
						<p className="mb-4">
							A brief description of the project. What it does,
							the technologies used, and your role.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							View Project
						</a>
					</div>

					{/* Project 2 */}
					<div className="bg-gray-100 p-6 rounded-lg">
						<h3 className="text-xl font-bold mb-2">
							Project Title 2
						</h3>
						<p className="mb-4">
							A brief description of the project. What it does,
							the technologies used, and your role.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							View Project
						</a>
					</div>
				</div>
			</section>

			<section id="contact">
				<h2 className="text-3xl font-bold mb-4">Contact</h2>
				<p className="text-lg">
					{
						"I'm always open to new opportunities and collaborations. Feel free to reach out to me at"
					}{" "}
					<a
						href="mailto:youremail@example.com"
						className="text-blue-500 hover:underline"
					>
						{"youremail@example.com"}
					</a>
					.
				</p>
			</section>
		</div>
	);
};

export { Content };
