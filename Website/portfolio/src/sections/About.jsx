import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI & ML Engineering",
    description:
      "Designing and deploying machine learning systems using Python, PyTorch, and modern ML frameworks.",
  },
  {
    icon: Rocket,
    title: "Scalable Systems",
    description:
      "Building high-performance data and AI pipelines using cloud infrastructure, APIs, and distributed processing.",
  },
  {
    icon: Users,
    title: "Technical Collaboration",
    description:
      "Working with engineers, analysts, and researchers to turn data into production-grade intelligent systems.",
  },
  {
    icon: Lightbulb,
    title: "Applied Innovation",
    description:
      "Developing practical AI solutions across domains such as data analytics, decision systems, and intelligent assistants.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
      <div className="absolute right-[-6rem] bottom-10 h-72 w-72 rounded-full bg-highlight/10 blur-3xl animate-slow-drift" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                About Me
              </span>
            </div>

            <h2 className="animate-fade-in animation-delay-100 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Building intelligent systems,
              <span className="font-serif font-normal italic text-gradient">
                {" "}
                powered by data and AI.
              </span>
            </h2>

            <div className="space-y-4 leading-7 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Aditya Boghara, a graduate student pursuing a Master of
                Science in Management Information Systems at the University of
                Houston. My work focuses on machine learning engineering,
                intelligent systems, and scalable software development.
              </p>

              <p>
                I build AI-driven applications using Python, SQL, and modern ML
                frameworks such as PyTorch and TensorFlow. My projects span
                predictive modeling, deep learning systems, and generative AI
                applications designed to solve real-world problems.
              </p>

              <p>
                Alongside academic research and projects, I work extensively on
                building production-style systems — integrating APIs, designing
                data pipelines, and deploying models through cloud platforms and
                web applications.
              </p>
            </div>

            <div className="glass-strong border-gradient rounded-3xl p-6 md:p-7 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic leading-8 text-foreground">
                "My goal is to engineer AI systems that transform raw data into
                intelligent decision-making tools — systems that are scalable,
                reliable, and impactful in real-world environments."
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass border-gradient group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface/80 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_14%,transparent)]">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
