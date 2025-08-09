import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahamed Ibrahim M - Portfolio",
  description: "Personal portfolio of Ahamed Ibrahim M, a Data Science & AI Enthusiast and ML Developer.",
  keywords:
    "Ahamed Ibrahim M, Data Science, AI, Machine Learning, Portfolio, Computer Science, Python, Java, Web Development",
  openGraph: {
    title: "Ahamed Ibrahim M - Portfolio",
    description: "Personal portfolio of Ahamed Ibrahim M, a Data Science & AI Enthusiast and ML Developer.",
    url: "https://your-github-username.github.io/your-repo-name/", // Update this for deployment
    siteName: "Ahamed Ibrahim M Portfolio",
    images: [
      {
        url: "/profile.png", // Update this for deployment if needed
        width: 800,
        height: 600,
        alt: "Ahamed Ibrahim M Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahamed Ibrahim M - Portfolio",
    description: "Personal portfolio of Ahamed Ibrahim M, a Data Science & AI Enthusiast and ML Developer.",
    images: ["/profile.png"], // Update this for deployment if needed
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
