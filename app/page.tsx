import Image from "next/image";

export default function Home() {

	const config = {
		name: "[Your Name]", // Your full name
		github: "[Your GitHub]", // The link to your GitHub profile
		twitter: "[Your Twitter]", // The link to your Twitter profile
		linkedin: "[Your LinkedIn]", // The link to your LinkedIn profile
		email: "[Your Email]" // Your email address
	}

	return (
		<div className="flex flex-col min-h-screen">
			<header className="mb-8 flex flex-row items-center justify-center">
				<Image src="/abbreviated.svg" alt="NCSSM Abbreviated Logo" width={75} height={75} />
				<h1 className="text-5xl font-bold mt-2 p-2 pb-4">{config.name}</h1>
			</header>
			<main className="flex-grow flex flex-row justify-center space-x-8 w-full px-8">
				<div className="w-1/2 space-y-8 text-left pl-8">
					<section>
						<h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
						<p className="text-lg mt-2">Hi, I'm {config.name}. I'm a student at NCSSM.</p>
					</section>
					<section>
						<h2 className="text-3xl font-semibold">Achievements</h2>
						<ul className="mt-2 list-disc list-inside">
							<li className="text-lg">Achievement 1</li>
							<li className="text-lg">Achievement 2</li>
							<li className="text-lg">Achievement 3</li>
						</ul>
					</section>
					<section>
						<h2 className="text-3xl font-semibold">Skills</h2>
						<ul className="mt-2 list-disc list-inside">
							<li className="text-lg">Skill 1</li>
							<li className="text-lg">Skill 2</li>
							<li className="text-lg">Skill 3</li>
						</ul>
					</section>
				</div>
				<div className="w-1/2 space-y-8 pr-8">
					{/* Using inline style as a fallback */}
					<section style={{backgroundColor: "#853175"}} className="p-6 rounded-lg shadow-md">
						<h2 className="text-3xl font-semibold text-white">Projects</h2>
						<ul className="mt-2 list-disc list-inside text-left text-white">
							<li className="text-lg">Project 1: Description of project 1.</li>
							<li className="text-lg">Project 2: Description of project 2.</li>
						</ul>
					</section>
					{/* Using inline style as a fallback */}
					<section style={{backgroundColor: "#346094"}} className="p-6 rounded-lg shadow-md">
						<h2 className="text-3xl font-semibold text-white">Coursework</h2>
						<p className="text-lg mt-2 text-left text-white">Brief description of relevant coursework and what was learned.</p>
					</section>
				</div>
			</main>
			<footer className="w-full py-4 flex flex-col items-center text-center" style={{backgroundColor: "#1b1b1b"}}>
				<div className="mb-4">
					<Image src="/horizontal.svg" alt="NCSSM Horizontal Logo" width={200} height={50} />
				</div>
				<div className="space-x-4 mb-2">
					<a href={`mailto:${config.email}`} style={{color: "#99caea"}} className="hover:text-white">Email: {config.email}</a>
				</div>
				<div className="space-x-4">
					<a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer" style={{color: "#99caea"}} className="hover:text-white">GitHub</a>
					<a href={`https://twitter.com/${config.twitter}`} target="_blank" rel="noopener noreferrer" style={{color: "#99caea"}} className="hover:text-white">Twitter</a>
					<a href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noopener noreferrer" style={{color: "#99caea"}} className="hover:text-white">LinkedIn</a>
				</div>
				<p className="text-sm text-gray-500 mt-4">© 2025 NCSSM. All rights reserved.</p>
			</footer>
		</div>
	);
}
