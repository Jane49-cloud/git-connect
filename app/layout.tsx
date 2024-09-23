import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Update the metadata with relevant SEO details
export const metadata: Metadata = {
  title: "Git Connect - Connect with Developers",
  description:
    "A platform for developers to find job opportunities, post bids, and collaborate with clients on projects.",
  keywords: [
    "Git Connect",
    "developers",
    "job opportunities",
    "freelancing",
    "collaboration",
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }], // Update with your name and URL
  openGraph: {
    title: "Git Connect",
    description: "Connect with developers and find exciting job opportunities.",
    url: "https://gitconnect.com",
    siteName: "Git Connect",
    images: ["./assets/git-connect.jpg"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
