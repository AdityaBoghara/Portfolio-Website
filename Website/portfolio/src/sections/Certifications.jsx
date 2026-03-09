"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued 2024",
    description:
      "Validated foundational knowledge of AWS cloud architecture, security, pricing, and core services used in modern distributed systems.",
    link: "#",
  },
  {
    title: "Introduction to Data Science in Python",
    issuer: "Coursera / University of Michigan",
    date: "Issued 2024",
    description:
      "Built practical foundations in Python-based data analysis, data manipulation, and exploratory workflows for real-world datasets.",
    link: "#",
  },
  {
    title: "Applied Plotting, Charting & Data Representation in Python",
    issuer: "Coursera / University of Michigan",
    date: "Issued 2024",
    description:
      "Focused on visualization techniques and analytical storytelling through charts, plots, and effective communication of insights.",
    link: "#",
  },
  {
    title: "Machine Learning",
    issuer: "Course Certification",
    date: "Issued 2024",
    description:
      "Covered supervised learning fundamentals, evaluation metrics, feature engineering, and practical machine learning workflows.",
    link: "#",
  },
  {
    title: "iOS and Swift - The Complete iOS App Development Bootcamp",
    issuer: "Udemy",
    date: "Issued 2023",
    description:
      "Built core iOS development skills using Swift, covering app architecture, interface design, and deployment concepts.",
    link: "#",
  },
];

export function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  }, []);

  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-highlight/10 blur-3xl" />

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Credentials
          </span>

          <h2 className="mb-4 mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-in animation-delay-100">
            Certifications{" "}
            <span className="font-serif italic font-normal text-gradient">
              & learning
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl animate-fade-in animation-delay-200">
            Formal credentials and technical coursework across cloud, machine
            learning, data science, and software engineering.
          </p>
        </motion.div>

        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-4">
            <button
              onClick={goToPrev}
              aria-label="Previous certificate"
              className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary glow-border"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex flex-1 justify-center gap-2">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-primary shadow-[0_0_12px_color-mix(in_srgb,var(--color-primary)_65%,transparent)]"
                      : "w-2 bg-muted hover:bg-muted-foreground/70"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              aria-label="Next certificate"
              className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary glow-border"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass-strong border-gradient group flex min-h-[340px] flex-col justify-between rounded-3xl p-8 md:p-10"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_12%,transparent)]">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {certificates[currentIndex].title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{certificates[currentIndex].issuer}</span>
                    <span className="text-primary/70">•</span>
                    <span>{certificates[currentIndex].date}</span>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">
                    {certificates[currentIndex].description}
                  </p>
                </div>

                {certificates[currentIndex].link !== "#" && (
                  <div className="mt-8">
                    <a
                      href={certificates[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
                    >
                      View Credential
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
