"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject") || "Portfolio Contact Form";
        const message = formData.get("message");

        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:areebaarif068@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Let's Connect
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary mx-auto rounded-full glow-hover w-24 mb-6"
                    />
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="glass-card p-8 rounded-3xl h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Sparkles size={100} />
                            </div>
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Email</h4>
                                        <p className="text-lg font-medium">areebaarif068@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Location</h4>
                                        <p className="text-lg font-medium">University of Gujrat</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="text-sm text-foreground/50 uppercase tracking-wider font-semibold mb-4">Socials</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/areeba-arif-318ab1338?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-hover">
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a href="mailto:areebaarif068@gmail.com" aria-label="Gmail" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-hover">
                                        <FaEnvelope size={18} />
                                    </a>
                                    <a href="https://github.com/AREEBA-13" aria-label="GitHub" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-hover">
                                        <FaGithub size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <form className="glass-card p-8 md:p-10 rounded-3xl space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 glass-input rounded-xl focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 glass-input rounded-xl focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 glass-input rounded-xl focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                    placeholder="Hello!"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 glass-input rounded-xl focus:ring-2 focus:ring-primary/50 transition-all resize-none font-medium"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.3)] active:translate-y-0"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
