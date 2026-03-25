"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);

            // Section active state highlight
            // Simple implementation: check what section is mostly in view
            const sections = navLinks.map((link) => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                    }
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className={cn(
                "fixed z-50 transition-all duration-300 left-1/2 glass-card border border-white/10 shadow-xl rounded-full w-[92vw] md:w-auto",
                hasScrolled ? "top-4 py-3 px-6 md:px-8 bg-background/60" : "top-6 py-4 px-6 md:px-8 md:py-4"
            )}
        >
            <div className="flex items-center justify-end md:justify-center relative w-full gap-4 md:gap-0">

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveSection(link.href.substring(1))}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-primary",
                                activeSection === link.href.substring(1) ? "text-primary" : "text-foreground/80"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full glow-hover"
                                />
                            )}
                        </a>
                    ))}

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted ? (
                            theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
                        ) : <div className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                    >
                        {mounted ? (
                            theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
                        ) : <div className="w-5 h-5" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card absolute top-[calc(100%+16px)] left-0 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveSection(link.href.substring(1));
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "text-lg font-medium",
                                        activeSection === link.href.substring(1) ? "text-primary" : "text-foreground"
                                    )}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
