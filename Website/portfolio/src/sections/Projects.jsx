import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "ThreatLens: Network Intrusion Detection Pipeline",
    description:
      "Built an end-to-end ML system for network threat detection with data preprocessing, feature engineering, experiment tracking, and containerized deployment workflows for production-style cybersecurity analytics.",
    tags: ["Python", "Scikit-learn", "MLflow", "Docker", "Flask", "AWS"],
    link: "#",
    github: "https://github.com/AdityaBoghara/Network-Security-ML-project",
  },
  {
    title: "PolicyLift: Insurance Conversion Prediction Engine",
    description:
      "Developed an XGBoost-based lead scoring system to predict insurance purchase likelihood, using class-balancing, cross-validation, and ROC-AUC/F1 optimization to support more targeted sales outreach.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Jupyter"],
    link: "#",
    github: "https://github.com/AdityaBoghara/Insurance-Classification-Project",
  },
  {
    title: "ChurnGuard: Deep Learning Retention Predictor",
    description:
      "Engineered an ANN-powered churn prediction workflow with preprocessing pipelines, saved inference artifacts, and an application layer for predicting customer attrition risk.",
    tags: ["Python", "TensorFlow", "ANN", "Model Deployment", "Jupyter"],
    link: "#",
    github: "https://github.com/AdityaBoghara/ANN-Churn-rate-classifier",
  },
  {
    title: "Developer Portfolio Platform",
    description:
      "Designed and deployed a personal portfolio website to present projects, technical breadth, and professional branding through a responsive front-end experience.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://adityaboghara.netlify.app",
    github: "https://github.com/AdityaBoghara/adityaboghara.github.io",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
      <div className="absolute left-[-6rem] bottom-10 h-72 w-72 rounded-full bg-highlight/10 blur-3xl animate-slow-drift" />

      <div className="container relative z-10 mx-auto px-6">
        {/* header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Featured Work
          </span>

          <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-in animation-delay-100">
            Projects that{" "}
            <span className="font-serif italic font-normal text-gradient">
              make an impact.
            </span>
          </h2>

          <p className="leading-7 text-muted-foreground animate-fade-in animation-delay-200">
            A selection of recent work across machine learning, predictive
            systems, and production-oriented software engineering.
          </p>
        </div>

        {/* project grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass border-gradient group rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* header */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>

                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              {/* description */}
              <p className="text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>

              {/* tags */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="mt-6 flex items-center gap-4">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
