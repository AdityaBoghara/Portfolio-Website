"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "Java", "R"],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Transformers",
      "NLP",
      "Time Series",
    ],
  },
  {
    title: "Generative AI & LLM",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "OpenAI API",
      "Vector Databases",
      "Prompt Engineering",
      "Agentic AI",
    ],
  },
  {
    title: "Backend & Software Engineering",
    skills: [
      "Node.js",
      "Express",
      "Flask",
      "REST APIs",
      "OOP",
      "Data Structures & Algorithms",
      "System Design",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript UI",
      "Responsive Design",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "Elastic Beanstalk",
      "Docker",
      "CI/CD",
      "MLflow",
      "Linux",
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Tableau",
      "Power BI",
      "Data Analysis",
      "Feature Engineering",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
      <div className="absolute right-[-6rem] bottom-10 h-64 w-64 rounded-full bg-highlight/10 blur-3xl animate-slow-drift" />

      <div className="content-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Core Stack
          </span>

          <h2 className="mt-4 mb-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-in animation-delay-100">
            Technical{" "}
            <span className="font-serif italic font-normal text-gradient">
              skillset
            </span>
          </h2>

          <p className="text-muted-foreground leading-7 animate-fade-in animation-delay-200">
            A stack spanning software engineering, machine learning systems,
            generative AI, and data-driven platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass border-gradient group rounded-3xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_color-mix(in_srgb,var(--color-primary)_75%,transparent)]" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 cursor-default hover:border-primary/30 hover:bg-primary/10 hover:text-foreground hover:shadow-[0_0_18px_color-mix(in_srgb,var(--color-primary)_10%,transparent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
