import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-foreground bg-background`}>
     <ThemeProvider>
  <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-foreground bg-background`}>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </body>
</ThemeProvider>
      </body>
    </html>
  );
}