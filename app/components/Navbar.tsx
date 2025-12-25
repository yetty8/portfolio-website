"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../theme-provider";

const navItems = [
  { name: "About", path: "about" },
  { name: "Projects", path: "projects" },
  { name: "Skills", path: "skills" },
  { name: "Contact", path: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();

  // Handle scroll for background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Highlight section based on scroll position
      const scrollPos = window.scrollY + 100; // Offset for header
      let current = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.path);
        if (section && scrollPos >= section.offsetTop) {
          current = item.path;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("home")}
          className={`text-2xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-gray-900 dark:text-white" : "text-white"
          }`}
        >
          Yetbarek Temesgen
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => scrollToSection(item.path)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.path
                  ? "text-blue-600 dark:text-blue-400"
                  : scrolled
                  ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Dark/Light Mode */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === item.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Dark/Light Mode in mobile menu */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              {theme === "dark" ? (
                <>
                  <FiSun className="w-5 h-5 text-yellow-400" /> Light Mode
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5 text-gray-700" /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
