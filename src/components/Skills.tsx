"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Javascript", "C#", "C/C++", "SQL", "Dart", "Python"]
    },
    {
        title: "Frameworks and Libraries",
        skills: ["Flutter", "React", ".NetBlazor", "Next.js", "Node.js", "Express", "Tailwind CSS"]
    },
    {
        title: "Tools & Technologies",
        skills: ["MS Office", "Git", "Github", "Visual Studio", "n8n", "Visual Studio Code", "MongoDB", "Android Studio", "Firebase"]
    },
    {
        title: "Soft Skills",
        skills: ["Teamwork", "Collaboration", "Adaptability", "Analytical Reasoning", "Leadership"]
    }
];

export default function Skills() {
    const tiltOptions = {
        max: 25,
        scale: 1.05,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 -skew-y-6 -z-10 blur-3xl" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary mx-auto rounded-full glow-hover w-24"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                        >
                            {/* @ts-ignore */}
                            <Tilt options={tiltOptions} className="h-full">
                                <div className="glass-card h-full p-8 rounded-3xl border border-white/5 dark:border-white/10 glow-hover transition-shadow overflow-hidden relative">
                                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-purple-600/30 blur opacity-0 hover:opacity-100 transition duration-500" />

                                    <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50 relative z-10">
                                        {category.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3 relative z-10">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-2 text-sm font-medium bg-foreground/5 dark:bg-black/40 border border-foreground/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-colors shadow-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
