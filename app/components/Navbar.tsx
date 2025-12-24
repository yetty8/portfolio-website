// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const navItems = [
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        <Link 
          href="/#home" 
          className={`text-2xl font-bold font-poppins tracking-tight transition-colors ${
            scrolled 
              ? "text-gray-900 dark:text-white" 
              : "text-white"
          }`}
        >
          Yetbarek Temesgen
        </Link>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.path 
                    ? "text-blue-600 dark:text-blue-400" 
                    : scrolled
                      ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}