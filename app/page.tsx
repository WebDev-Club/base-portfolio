import Image from "next/image";

/**
 * The config object contains your personal information.
 * Replace the values with your own information.
 * 
 * To edit the actual information about you, you will need to 
 * edit the HTML content.
 */
const config = {
	name: "[Your Name]", // Your full name
	github: "[Your GitHub]", // The link to your GitHub profile
	twitter: "[Your Twitter]", // The link to your Twitter profile
	linkedin: "[Your LinkedIn]", // The link to your LinkedIn profile
	email: "[Your Email]" // Your email address
}

/**
 * The Home component is the main component that will be rendered on the home page.
 * It is composed of a Header, LeftBody, RightBody, and Footer component.
 * - The Header component contains the title of the portfolio.
 * - The LeftBody component contains a brief introduction, achievements, and skills.
 * - The RightBody component contains projects and coursework.
 * - The Footer component contains the NCSSM logo, contact information, and social media links.
 * 
 * Because this is the default export component, it is what is loaded when the page loads, every 
 * other component is loaded because we call it inside this component. This is the root component
 * in the hierarchy of components. (In this file at least, technically theres more component higher up)
 * 
 * @returns The Home component contains the Header, LeftBody, RightBody, and Footer components.
 */
export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* 
			
			Notice how I use inline styling through tailwindcss to style my components, I used
			no css unless I needed to interact with the theme variables. This makes styling your
			app much faster and it makes you more productive.
			
			https://tailwindcss.com/docs/styling-with-utility-classes

			*/}
			<Header />
			<main className="flex-grow flex flex-row justify-center space-x-8 w-full px-8">
				<LeftBody />
				<RightBody />
			</main>
			<Footer />
		</div>
	);
}

/**
 * The Header component is a functional component that renders the title of the portfolio.
 * @returns The Header component contains the title of the portfolio.
 */
function Header() {
	return (
		<header className="mb-8 flex flex-row items-center justify-center">
			<Image src="/the.gif" alt="NCSSM Abbreviated Logo" width={75} height={75} />
			<h1 className="text-5xl font-bold mt-2 p-2 pb-4">what</h1>
			<Image src="/the.gif" alt="NCSSM Abbreviated Logo" width={75} height={75} />
		</header>
	)
}

/**
 * The LeftBody component is a functional component that renders a brief introduction, achievements, and skills.
 * @returns The LeftBody component contains a brief introduction, achievements, and skills.
 */

//{config.name}
function LeftBody() {
	return (
		<div className="w-1/2 space-y-8 text-left pl-8">
			<section>
				<h1 className="text-4xl font-bold">I didn't fall</h1>
				<p className="text-lg mt-2">Hi, I of course I talk to myself. I'm almost there.</p>
			</section>
			<section>
				<h2 className="text-3xl font-semibold">Top 10 cats</h2>
				<ul className="mt-2 list-disc list-inside">
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
					<li className="text-lg">Wanna see something funny</li>
				</ul>
			</section>
			<section>
				<h2 className="text-3xl font-semibold">Skills</h2>
				<ul className="mt-2 list-disc list-inside">
					<li className="text-lg">none</li>
					<li className="text-lg">I fell</li>
					<li className="text-lg">cereal making </li>
				</ul>
			</section>
		</div>
	)
}

/**
 * The RightBody component is a functional component that renders projects and coursework.
 * @returns The RightBody component contains projects and coursework.
 */
function RightBody() {
	return (
		<div className="w-1/2 space-y-8 pr-8">
			<section className="bg-accentPurple p-6 rounded-lg shadow-md">
				<h2 className="text-3xl font-semibold text-white">Projects</h2>
				<ul className="mt-2 list-disc list-inside text-left text-white">
					<li className="text-lg">Project 1: AI water.</li>
					<li className="text-lg">Project 2: AI gasoline.</li>
					<li className="text-lg">Project 3: AI tractor.</li>
					<li className="text-lg">Project 4: AI candy.</li>
					<li className="text-lg">Project 5: AI among us.</li>
					<li className="text-lg">Project 6: AI cat.</li>
					<Image src="/ramen.png" alt="NCSSM Abbreviated Logo" width={50} height={50} />
				</ul>
			</section>
			<section className="bg-primaryBlue p-6 rounded-lg shadow-md">
				<h2 className="text-3xl font-semibold text-white">Coursework:</h2>
				<p className="text-lg mt-2 text-left text-white">All of them.</p>
				<Image src="/peak.png" alt="NCSSM Abbreviated Logo" width={75} height={75} />
			</section>
		</div>
	)
}

/**
 * The Footer component is a functional component that renders the NCSSM logo, contact information, and social media links.
 * @returns The Footer component contains the NCSSM logo, contact information, and social media links.
 */
function Footer() {
	return (
		<footer className="w-full py-4 flex flex-col items-center text-center" style={{backgroundColor: "#1b1b1b"}}>
			<div className="mb-4">
				<Image src="/the.gif" alt="NCSSM Horizontal Logo" width={200} height={50} />
			</div>
			<div className="space-x-4 mb-2">
				<a href={`mailto:${config.email}`} className="text-accentSkyBlue hover:text-white">Email: {config.email}</a>
			</div>
			<div className="space-x-4">
				<a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer" className="text-accentSkyBlue hover:text-white">GitHub</a>
				<a href={`https://twitter.com/${config.twitter}`} target="_blank" rel="noopener noreferrer" className="text-accentSkyBlue hover:text-white">Twitter</a>
				<a href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-accentSkyBlue hover:text-white">LinkedIn</a>
			</div>
			<p className="text-sm text-gray-500 mt-4">© 2025 NCSSM. All rights reserved.</p>
		</footer>
	)
}