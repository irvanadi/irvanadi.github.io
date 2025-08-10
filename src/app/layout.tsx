import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Irvan Adi Santoso | Full Stack Developer",
	description:
		"Personal portfolio of Irvan Adi Santoso, a full stack developer specializing in React, Node.js, and TypeScript.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${roboto.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
