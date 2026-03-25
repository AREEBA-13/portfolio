"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { FaGithub, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFlutter, SiDart, SiCss } from "react-icons/si";
import { Tilt } from "react-tilt";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Computer Science Student ";

    // Typing animation effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Animated Gradient / Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">


                {/* Profile picture + orbiting tech cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="mb-16 relative w-48 h-48 md:w-56 md:h-56 mx-auto"
                >
                    {/* @ts-ignore */}
                    <Tilt options={{ max: 35, perspective: 1000, scale: 1.1, speed: 300, glare: true, "max-glare": 0.5 }} className="w-full h-full rounded-full p-2 glass-card bg-gradient-to-tr from-primary/40 to-purple-500/40 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/profile.jpeg"
                            alt="Areeba Arif"
                            className="w-full h-full object-cover rounded-full border-4 border-foreground/10"
                        />
                    </Tilt>

                    {/* React — top-right diagonal */}
                    <motion.div
                        animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }}
                        className="absolute top-[10%] -right-14 w-11 h-11 rounded-2xl glass-card border flex items-center justify-center text-[#61DAFB] shadow-lg z-20"
                    >
                        <FaReact size={22} />
                    </motion.div>

                    {/* Tailwind — bottom-right diagonal */}
                    <motion.div
                        animate={{ x: [0, 8, 0], y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[10%] -right-14 w-11 h-11 rounded-2xl glass-card border flex items-center justify-center text-[#06B6D4] shadow-lg z-20"
                    >
                        <SiTailwindcss size={22} />
                    </motion.div>

                    {/* Node.js — bottom-left diagonal */}
                    <motion.div
                        animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-[10%] -left-14 w-11 h-11 rounded-full glass-card border flex items-center justify-center text-[#68A063] shadow-lg z-20"
                    >
                        <FaNodeJs size={22} />
                    </motion.div>

                    {/* Firebase — top-left diagonal */}
                    <motion.div
                        animate={{ x: [0, -6, 0], y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
                        className="absolute top-[10%] -left-14 w-11 h-11 rounded-2xl glass-card border flex items-center justify-center text-[#FFCA28] shadow-lg z-20"
                    >
                        <SiFirebase size={20} />
                    </motion.div>

                    {/* GitHub — right middle */}
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                        className="absolute top-1/2 -translate-y-1/2 -right-16 w-10 h-10 rounded-xl glass-card flex items-center justify-center text-primary shadow-lg z-20"
                    >
                        <FaGithub size={20} />
                    </motion.div>

                    {/* TypeScript — left middle */}
                    <motion.div
                        animate={{ x: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.5 }}
                        className="absolute top-1/2 -translate-y-1/2 -left-16 w-10 h-10 rounded-xl glass-card border flex items-center justify-center opacity-80 shadow-lg z-20"
                    >
                        <span className="text-sm font-bold italic">Ts</span>
                    </motion.div>

                    {/* Flutter — bottom center-right */}
                    <motion.div
                        animate={{ y: [0, 10, 0], x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.3 }}
                        className="absolute -bottom-14 right-[25%] w-10 h-10 rounded-2xl glass-card border flex items-center justify-center text-[#54C5F8] shadow-lg z-20"
                    >
                        <SiFlutter size={20} />
                    </motion.div>

                    {/* Python — bottom center-left */}
                    <motion.div
                        animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.2 }}
                        className="absolute -bottom-14 left-[25%] w-10 h-10 rounded-2xl glass-card border flex items-center justify-center text-[#3572A5] shadow-lg z-20"
                    >
                        <FaPython size={20} />
                    </motion.div>

                    {/* Git — far right lower */}
                    <motion.div
                        animate={{ x: [0, 12, 0], y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
                        className="absolute bottom-[30%] -right-20 w-10 h-10 rounded-full glass-card border flex items-center justify-center text-[#F05032] shadow-lg z-20"
                    >
                        <FaGitAlt size={20} />
                    </motion.div>

                    {/* Dart — far left upper */}
                    <motion.div
                        animate={{ x: [0, -12, 0], y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.8 }}
                        className="absolute top-[30%] -left-20 w-10 h-10 rounded-full glass-card border flex items-center justify-center text-[#00B4AB] shadow-lg z-20"
                    >
                        <SiDart size={18} />
                    </motion.div>

                    {/* CSS — far right upper */}
                    <motion.div
                        animate={{ x: [0, 10, 0], y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 3 }}
                        className="absolute top-[30%] -right-20 w-10 h-10 rounded-xl glass-card border flex items-center justify-center text-[#264de4] shadow-lg z-20"
                    >
                        <SiCss size={18} />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 dark:from-white dark:to-white/60"
                >
                    Areeba Arif
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-8 md:h-12 mb-8"
                >
                    <p className="text-xl md:text-3xl text-foreground/80 font-medium font-mono">
                        {text}<span className="animate-blink">|</span>
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-lg text-foreground/60 mb-10 max-w-2xl text-balance"
                >
                    I build beautiful, high-performance web and Mobile applications with modern technologies. Bridging the gap between
                    design and engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                    >
                        Hire Me <ExternalLink size={18} />
                    </a>
                    <a
                        href="/Areeba_Arif_Resume.pdf"
                        download="Areeba_Arif_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95"
                    >
                        Download Resume <Download size={18} />
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
