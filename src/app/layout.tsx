import Navbar from "@/components/navbar";
import { Ubuntu } from "next/font/google";
import "./globals.css";

export const metadata = {};

const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: "500"
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${ubuntu.className} md:p-4`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
