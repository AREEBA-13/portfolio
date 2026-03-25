"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { ExternalLink, X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tech: string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    download?: string | null;
    builtOn: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Catalog App",
        description: "A cross-platform product catalog mobile application with seamless categorization.",
        longDescription: "An interactive mobile application designed to display a wide variety of products with efficient search, filter, and categorization mechanisms across multiple devices.",
        image: "/catelog.png",
        tech: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/AREEBA-13/catalog",
        live: null,
        builtOn: "Jul 2025",
        featured: false
    },
    {
        id: 2,
        title: "Lush Blush",
        description: "A beautifully designed e-commerce platform for cosmetics and beauty products.",
        longDescription: "Lush Blush is a vibrant, fully-responsive e-commerce application targeting the beauty niche. It features a complete shopping cart experience, wishlist capabilities, and a polished user interface.",
        image: "/lushblush.png",
        tech: ["React", "Tailwind CSS", "Node.js"],
        github: "https://github.com/AREEBA-13/Lush_Blush",
        live: null,
        builtOn: "Jun 2025",
        featured: true
    },
    {
        id: 3,
        title: "AI ChatBot",
        description: "An intelligent conversational agent built natively for seamless mobile interaction.",
        longDescription: "A Flutter-based chatbot application that acts as a smart assistant. It integrates with real-time backend databases to deliver dynamic, on-the-fly conversational flows.",
        image: "/chatbbot.png",
        tech: ["Flutter", "Dart", "API Integration"],
        github: "https://github.com/AREEBA-13/My_ChatBot_Flutter",
        live: null,
        builtOn: "Jul 2025",
        featured: false
    },
    {
        id: 4,
        title: "Drapely",
        description: "A modern web application tailored for fashion and clothing enthusiasts.",
        longDescription: "Drapely brings high-end fashion to the screen. It is a robust web platform featuring elegant navigation, advanced filtering, and a state-of-the-art UI perfect for clothing brands.",
        image: "/drapely.jpeg",
        tech: ["Next.js", "React", "Tailwind"],
        github: "https://github.com/AREEBA-13/Drapely",
        live: null,
        builtOn: "Dec 2025",
        featured: true
    },
    {
        id: 5,
        title: "Classic Snake Game",
        description: "A retro, web-based arcade snake game with smooth controls.",
        longDescription: "A nostalgic browser remake of the classic snake game. Built strategically to handle 2D game loops, coordinate rendering, and dynamic score tracking mechanics in real time.",
        image: "/snake-game.png",
        tech: ["WinForms", ".NET", "C#"],
        github: "https://github.com/AREEBA-13/snake-game-068",
        live: null,
        builtOn: "Oct 2025",
        featured: true
    },
    {
        id: 6,
        title: "Recipe Finder",
        description: "A culinary discovery platform to search and filter endless global recipes.",
        longDescription: "Recipe Finder utilizes third-party APIs to bring thousands of recipes straight to the user's screen. It includes detailed ingredient trackers, nutritional values, and beautiful recipe cards.",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
        tech: ["React", "Express", "REST APIs"],
        github: "https://github.com/AREEBA-13/RecipeFinder",
        live: "https://lnkd.in/deMrgDiy",
        builtOn: "Dec 2025",
        featured: false
    },
    {
        id: 7,
        title: "DietoSphere",
        description: "A comprehensive health and diet tracking platform to monitor meals.",
        longDescription: "DietoSphere empowers users to take control of their nutritional health. With macros tracking, diet planners, and a clean minimalist UI, it creates a personal wellness bubble.",
        image: "/dietosphere.png",
        tech: ["TypeSript", "JavaScript", "TailwindCSS"],
        github: "https://github.com/AREEBA-13/DietoSphere",
        live: "https://dieto-sphere.vercel.app/",
        builtOn: "Nov 2025",
        featured: true
    },
    {
        id: 8,
        title: "Tasty Track",
        description: "A cross-platform mobile tracker for favorite meals and food logs.",
        longDescription: "Tasty Track is your personal mobile food diary. Designed entirely in Flutter, it provides a seamless logging experience for users to journal meals, track habits, and rate dishes instantly.",
        image: "/tastytrack.png",
        tech: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/AREEBA-13/tasty_track_flutter",
        live: null,
        download: "/tasty_track.apk",
        builtOn: "Aug 2025",
        featured: false
    },
    {
        id: 9,
        title: "Campus Companion",
        description: "An automated zero-code student agent managing schedules, deadlines, and daily digests.",
        longDescription: "Built with n8n workflow automation, Campus Companion automatically fetches class schedules from Google Sheets, tracks assignments via Google Forms, appends a Quotable API motivational quote, and emails a personalized daily digest directly to Gmail on autopilot.",
        image: "/campuscompanion.png",
        tech: ["n8n", "Google API", "JavaScript", "No-Code"],
        github: null,
        live: "https://www.linkedin.com/posts/areeba-arif-318ab1338_n8n-automation-nocode-ugcPost-7382773261840887809-0kvY",
        builtOn: "Sep 2025",
        featured: true
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        if (currentIndex < projects.length - 1) setCurrentIndex(prev => prev + 1);
    };

    const prevProject = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedId]);

    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Featured Works
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary mx-auto rounded-full glow-hover w-24"
                    />
                </div>

                <div className="relative w-full h-[32rem] sm:h-[36rem] flex items-center justify-center [perspective:1000px] overflow-hidden md:overflow-visible">
                    <AnimatePresence initial={false}>
                        {projects.map((project, index) => {
                            const offset = index - currentIndex;
                            if (Math.abs(offset) > 2) return null;

                            return (
                                <motion.div
                                    layoutId={`project-container-${project.id}`}
                                    key={project.id}
                                    initial={{ opacity: 0, x: offset > 0 ? 500 : -500 }}
                                    animate={{
                                        opacity: Math.abs(offset) >= 2 ? 0 : 1,
                                        x: `${offset * 70}%`,
                                        z: Math.abs(offset) * -150,
                                        rotateY: offset * -25,
                                        scale: 1 - Math.abs(offset) * 0.1,
                                        zIndex: 50 - Math.abs(offset)
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    onClick={() => {
                                        if (offset === 0) setSelectedId(project.id);
                                        else setCurrentIndex(index);
                                    }}
                                    className="absolute w-[80%] max-w-lg cursor-pointer group"
                                    style={{
                                        pointerEvents: Math.abs(offset) > 1 ? "none" : "auto"
                                    }}
                                >
                                    {/* @ts-ignore */}
                                    <Tilt options={{ max: 10, scale: 1.02, speed: 400 }} className="h-[28rem] sm:h-[32rem]">
                                        <div className="glass-card overflow-hidden rounded-3xl h-full flex flex-col relative glow-hover shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-80" />

                                            <div className="relative w-full overflow-hidden flex items-center justify-center bg-[#111] dark:bg-white/5 rounded-t-3xl h-52 sm:h-64">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="object-contain w-full h-full p-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] transform transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full">
                                                <motion.div layoutId={`project-title-${project.id}`}>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-white/80 whitespace-nowrap ml-2">
                                                            {project.builtOn}
                                                        </span>
                                                    </div>
                                                </motion.div>

                                                <p className="text-gray-300 text-sm mb-4 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                                    {project.tech.slice(0, 3).map((t) => (
                                                        <span key={t} className="text-xs px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white">
                                                            {t}
                                                        </span>
                                                    ))}
                                                    {project.tech.length > 3 && (
                                                        <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white">
                                                            +{project.tech.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Tilt>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-center gap-6 mt-12 relative z-20">
                    <button
                        onClick={prevProject}
                        disabled={currentIndex === 0}
                        className="p-4 rounded-full glass-card hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground/50"
                    >
                        <ChevronLeft />
                    </button>
                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={cn("h-2 rounded-full transition-all", i === currentIndex ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/50")}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextProject}
                        disabled={currentIndex === projects.length - 1}
                        className="p-4 rounded-full glass-card hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground/50"
                    >
                        <ChevronRight />
                    </button>
                </div>

                {/* Modal Entry */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            <motion.div
                                layoutId={`project-container-${selectedId}`}
                                className="relative bg-background glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-10"
                            >
                                {projects.filter(p => p.id === selectedId).map(project => (
                                    <div key={project.id} className="flex flex-col">
                                        <div className="relative w-full h-64 md:h-[28rem] bg-[#111] dark:bg-white/5 flex items-center justify-center p-8">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={project.image} alt={project.title} className="object-contain w-full h-full drop-shadow-2xl" />
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                                            >
                                                <X size={24} />
                                            </button>
                                        </div>

                                        <div className="p-8 md:p-12">
                                            <motion.div layoutId={`project-title-${project.id}`}>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                                            </motion.div>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-foreground/80 text-lg leading-relaxed mb-10">
                                                {project.longDescription}
                                            </p>

                                            <div className="flex gap-4">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 glass-card rounded-xl hover:bg-foreground/5 transition-colors font-semibold">
                                                        <FaGithub /> GitHub
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:bg-primary/90 transition-colors font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                                        <ExternalLink size={20} /> Live Demo
                                                    </a>
                                                )}
                                                {project.download && (
                                                    <a href={project.download} download className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition-colors font-semibold shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                                        <Download size={20} /> Download APK
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
