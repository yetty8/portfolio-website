"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yetty8",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yetbarek-temesgen/",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "Email",
    url: "mailto:yetbarek.tech@gmail.com",
    icon: <FaEnvelope className="w-5 h-5" />,
  },
  {
    name: "Resume",
    url: "/Yetbarek-Resume-v2.pdf",
    icon: <FaFilePdf className="w-5 h-5" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand / About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              Yetbarek Temesgen
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Full-Stack Web Developer focused on building scalable,
              user-centered applications with modern JavaScript technologies.
              Experienced in translating real-world problems into clean,
              reliable software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
                { label: "Resume", href: "/Yetbarek-Resume-v2.pdf" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.label === "Resume" ? "_blank" : undefined}
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                             text-gray-300 hover:text-white
                             hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600
                             transition-colors focus:outline-none"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Yetbarek Temesgen. Built with Next.js & Tailwind CSS.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
