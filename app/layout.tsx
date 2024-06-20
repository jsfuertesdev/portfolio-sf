import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google';

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: 'Sebastian Fuertes Portfolio',
	authors: {
		name: "Joan Sebastian Fuertes Garcia",
	},

	description:
		"Based in Colombia i'm a fullstack developer Working in create new experiences with AI and blockchain",
	openGraph: {
		title: "Sebastian Fuertes portfolio",
		description:
			"Based in Colombia i'm a fullstack developer Working in create new experiences with AI and blockchain.",
		url: "https://the-coach.vercel.app/",
		siteName: "Sebastian Fuertes portfolio",
		images: "/TheCoach.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

          {children}

        </ThemeProvider>  
		<GoogleAnalytics gaId="G-YK3Q9T51T2" />
      </body>
    </html>
  );
}
