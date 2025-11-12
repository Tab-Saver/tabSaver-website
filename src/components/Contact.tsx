"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Bug, Lightbulb, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactReasons = [
  {
    icon: Bug,
    title: "Report Issues",
    description: "Found a bug or experiencing problems? Let us know so we can fix it.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Lightbulb,
    title: "Suggestions & Recommendations",
    description: "Have ideas for new features or improvements? We'd love to hear them.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Users,
    title: "Collaborations",
    description: "Interested in contributing to Tab Saver? Let's work together.",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
];

export function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tabsaver.help@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions, suggestions, or want to collaborate? We're here to help and always open to feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12" ref={cardsRef}>
          {contactReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg ${reason.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-6 h-6 ${reason.color}`} />
                  </motion.div>
                  <h3 className="group-hover:text-primary transition-colors duration-300">{reason.title}</h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Bug Report / Feature Request / General Feedback"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[150px] bg-input-background"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" className="w-full gap-2 transition-all duration-300 hover:shadow-lg">
                  <Mail className="w-5 h-5" />
                  Send Message
                </Button>
              </motion.div>

              <div className="text-center pt-4 border-t">
                <p className="text-muted-foreground">
                  You can also reach us at:
                </p>
                <a
                  href="mailto:tabsaver.help@outlook.com"
                  className="text-primary hover:underline"
                >
                  tabsaver.help@outlook.com
                </a>
              </div>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
