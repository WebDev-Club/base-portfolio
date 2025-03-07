import Image from "next/image";
import RatSpin from "../src/components/RatSpin";

/**
 * The config object contains your personal information.
 * Replace the values with your own information.
 *
 * To edit the actual information about you, you will need to
 * edit the HTML content.
 */
const config = {
  name: "Emme McDonald", // Your full name
  github: "[Your GitHub]", // The link to your GitHub profile
  twitter: "[Your Twitter]", // The link to your Twitter profile
  linkedin: "[Your LinkedIn]", // The link to your LinkedIn profile
  email: "[Your Email]", // Your email address
};

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
      <main className="flex-grow flex flex-row justify-center space-x-8 w-full px-8 mb-10">
		<RatSpin></RatSpin>
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
      <Image
        src="/abbreviated.svg"
        alt="NCSSM Abbreviated Logo"
        width={75}
        height={75}
      />
      <h1 className="text-5xl font-bold mt-2 p-2 pb-4">{config.name}</h1>
    </header>
  );
}

/**
 * The LeftBody component is a functional component that renders a brief introduction, achievements, and skills.
 * @returns The LeftBody component contains a brief introduction, achievements, and skills.
 */
// function LeftBody() {
// 	return (
// 		<div className="w-1/2 space-y-8 text-left pl-8">
// 			<section>
// 				<h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
// 				<p className="text-lg mt-2">Hi, I&apos;m {config.name}. I&apos;m a student at NCSSM.</p>
// 			</section>
// 			<section>
// 				<h2 className="text-3xl font-semibold">Achievements</h2>
// 				<ul className="mt-2 list-disc list-inside">
// 					<li className="text-lg">Achievement 1</li>
// 					<li className="text-lg">Achievement 2</li>
// 					<li className="text-lg">Achievement 3</li>
// 				</ul>
// 			</section>
// 			<section>
// 				<h2 className="text-3xl font-semibold">Skills</h2>
// 				<ul className="mt-2 list-disc list-inside">
// 					<li className="text-lg">Skill 1</li>
// 					<li className="text-lg">Skill 2</li>
// 					<li className="text-lg">Skill 3</li>
// 				</ul>
// 			</section>
// 		</div>
// 	)
// }

/**
 * The RightBody component is a functional component that renders projects and coursework.
 * @returns The RightBody component contains projects and coursework.
 */
// function RightBody() {
//   return (
//     <div className="w-1/2 space-y-8 pr-8">
//       <section className="bg-accentPurple p-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-semibold text-white">Projects</h2>
//         <ul className="mt-2 list-disc list-inside text-left text-white">
//           <li className="text-lg">Project 1: Description of project 1.</li>
//           <li className="text-lg">Project 2: Description of project 2.</li>
//         </ul>
//       </section>
//       <section className="bg-primaryBlue p-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-semibold text-white">Coursework</h2>
//         <p className="text-lg mt-2 text-left text-white">
//           Brief description of relevant coursework and what was learned.
//         </p>
//       </section>
//     </div>
//   );
// }

/**
 * The Footer component is a functional component that renders the NCSSM logo, contact information, and social media links.
 * @returns The Footer component contains the NCSSM logo, contact information, and social media links.
 */
function Footer() {
  return (
    <footer
      className="w-full py-4 flex flex-col items-center text-center"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <div className="mb-4">
        <Image
          src="/horizontal.svg"
          alt="NCSSM Horizontal Logo"
          width={200}
          height={50}
        />
      </div>
      <div className="space-x-4 mb-2">
        <a
          href={`mailto:${config.email}`}
          className="text-accentSkyBlue hover:text-white"
        >
          Email: {config.email}
        </a>
      </div>
      <div className="space-x-4">
        <a
          href={`https://github.com/${config.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentSkyBlue hover:text-white"
        >
          GitHub
        </a>
        <a
          href={`https://twitter.com/${config.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentSkyBlue hover:text-white"
        >
          Twitter
        </a>
        <a
          href={`https://linkedin.com/in/${config.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentSkyBlue hover:text-white"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        © 2025 NCSSM. All rights reserved.
      </p>
    </footer>
  );
}
