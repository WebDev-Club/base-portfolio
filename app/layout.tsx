import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const monseratt = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Created from tutorial base-portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${monseratt.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
