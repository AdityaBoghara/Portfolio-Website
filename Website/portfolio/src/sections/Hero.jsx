import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Python",
  "JavaScript",
  "SQL",
  "C++",
  "REST APIs",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Hugging Face",
  "LangChain",
  "RAG",
  "Pandas",
  "NumPy",
  "Feature Engineering",
  "Model Training",
  "Model Evaluation",
  "Vector Databases",
  "Docker",
  "AWS",
  "EC2",
  "S3",
  "Elastic Beanstalk",
  "MLflow",
  "CI/CD",
  "Git",
  "GitHub Actions",
  "Linux",
  "Data Structures",
  "Algorithms",
  "System Design",
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.10),transparent_24%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-12 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
        <div className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-highlight/10 blur-3xl animate-slow-drift" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/8 blur-3xl animate-slow-drift" />

        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(52,211,153,0.45)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                16 + Math.random() * 18
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Software Engineer • Machine Learning and Data
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="animate-fade-in animation-delay-100 text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Engineering <span className="glow-text text-primary">AI</span>
                <br />
                driven systems with
                <br />
                <span className="font-serif font-normal italic text-gradient">
                  precision.
                </span>
              </h1>

              <p className="animate-fade-in animation-delay-200 max-w-xl text-lg leading-8 text-muted-foreground">
                Hi, I'm Aditya Boghara — an AI and machine learning engineer
                building data-driven systems that solve real-world problems. My
                work focuses on scalable ML pipelines, intelligent automation,
                and cloud-deployed AI applications.
              </p>
            </div>

            <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="h-5 w-5" />
                </Button>
              </a>

              <a href="/Aditya Boghara_Machine Learning.pdf" download>
                <AnimatedBorderButton>
                  <Download className="h-5 w-5" />
                  Download Resume
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="animate-fade-in animation-delay-400 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                { icon: Github, href: "https://github.com/AdityaBoghara" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/adityaboghara",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in animation-delay-300 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-highlight/10 blur-2xl" />

              <div className="glass-strong border-gradient relative rounded-[2rem] p-2">
                <img
                  src="profile-pic.png"
                  alt="Aditya Boghara"
                  className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
                />

                <div className="glass absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">
                      Available for new opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-600 mt-20">
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

            <div className="glass rounded-2xl py-2">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="flex-shrink-0 px-7 py-3">
                    <span className="text-base font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animation-delay-800 absolute bottom-4 left-1/2 z-30 -translate-x-1/2 animate-fade-in">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
