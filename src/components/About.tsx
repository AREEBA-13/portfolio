"use client";

import { motion } from "framer-motion";
import { User, Code2, Cpu } from "lucide-react";

export default function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-hover" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="glass-card p-8 md:p-10 rounded-3xl relative"
                    >
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <User className="text-primary" /> The Journey
                        </h3>
                        <p className="text-lg text-foreground/80 leading-relaxed mb-6 text-balance">
                            I am a dedicated Computer Science student with a strong passion for learning and problem-solving. My academic journey combines theoretical knowledge with practical experience, helping me understand how to design effective solutions for real-world challenges.
                            I have built a solid foundation in key areas which has strengthened my analytical thinking and approach to complex problems.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                            Beyond academics, I actively work on projects that allow me to apply my knowledge, explore new ideas, and continuously improve. I am driven by curiosity and a commitment to growth, aiming to become a skilled developer who creates meaningful impact through technology.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid gap-6"
                    >
                        {[
                            {
                                icon: <Code2 size={24} />,
                                title: "Frontend Development",
                                desc: "Creating pixel-perfect, responsive UIs using modern tools like React, Next.js, and Tailwind CSS. I specialize in building highly interactive components with complex animations, ensuring seamless user experiences."
                            },
                            {
                                icon: <Cpu size={24} />,
                                title: "Backend Systems",
                                desc: "Designing scalable, high-performance APIs and robust backend architectures. Proficient in Node.js and Express, with strong experience managing SQL and MongoDB databases to ensure fast and secure data handling."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-[1.02] transition-transform glow-hover cursor-default"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-foreground/70">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
