import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { AmbientBackground } from "@/components/layout/ambient-background";
import { Navbar } from "@/components/layout/navbar";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CommandMenu } from "@/components/layout/command-menu";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { profile } from "@/data/resume";

// Geist is shipped as an npm package — we load it from node_modules to avoid
// network fetches at build time (Google Fonts may be unreachable in CI).
const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

// Instrument Serif — used only for large display headings (font-[family-name:var(--font-display)]).
// We fall back to Georgia if the font file isn't present in the build environment.
const instrumentSerif = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: `${profile.name} — AI/ML Engineer`,
  description:
    "B.Tech CSE student specializing in AI & ML. Built and deployed production AI systems — a RAG chatbot and a VS Code extension with 1,000+ installs. ML Intern at IIIT Allahabad.",
  keywords: [
    "Ruchitha Gedela",
    "AI/ML Engineer",
    "Machine Learning",
    "RAG Pipeline",
    "LangChain",
    "VS Code Extension",
    "IIIT Allahabad",
    "Uttaranchal University",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ruchithagedela.dev",
    title: `${profile.name} — AI/ML Engineer`,
    description:
      "Production AI systems, robotics ML research, and a published VS Code extension. Open to AI/ML internships.",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/ML Engineer`,
    description:
      "Production AI systems, robotics ML research, and a published VS Code extension. Open to AI/ML internships.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            <LoadingScreen />
            <AmbientBackground />
            <ScrollProgress />
            <CustomCursor />
            <CommandMenu />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <Chatbot />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
