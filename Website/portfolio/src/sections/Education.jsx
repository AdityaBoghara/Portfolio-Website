const education = [
  {
    period: "2024 — 2026",
    degree: "Master of Science in Management Information Systems",
    institution: "University of Houston",
    description:
      "Graduate program focused on data analytics, machine learning systems, cloud computing, and enterprise information systems. Worked on projects involving deep learning, time series analysis, database systems, and AI-driven applications.",
    highlights: [
      "Machine Learning",
      "Time Series Analysis",
      "Database Systems",
      "Cloud Computing",
      "AI Systems",
    ],
    current: true,
  },
  {
    period: "2020 — 2023",
    degree: "Bachelor of Science in Computer Science",
    institution: "Arizona State University",
    description:
      "Computer science program covering algorithms, software engineering, data structures, operating systems, and distributed systems. Developed strong foundations in programming, system design, and computational problem solving.",
    highlights: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Operating Systems",
      "Distributed Systems",
      "Object-Oriented Programming",
    ],
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-[-8rem] top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
      <div className="absolute right-[-6rem] bottom-12 h-72 w-72 rounded-full bg-highlight/10 blur-3xl animate-slow-drift" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <span className="animate-fade-in text-sm font-medium uppercase tracking-wider text-secondary-foreground">
            Academic Background
          </span>

          <h2 className="mt-4 mb-6 animate-fade-in animation-delay-100 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Education that{" "}
            <span className="font-serif font-normal italic text-gradient">
              built the foundation.
            </span>
          </h2>

          <p className="animate-fade-in animation-delay-200 max-w-2xl leading-7 text-muted-foreground">
            My academic journey across computer science and information systems,
            shaping my understanding of software engineering, artificial
            intelligence, and data-driven systems.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid gap-8 animate-fade-in md:grid-cols-2"
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
              >
                <div className="absolute left-0 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary opacity-70 animate-ping" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass border-gradient group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] md:p-7">
                    <span className="text-sm font-medium text-primary">
                      {edu.period}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.institution}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {edu.description}
                    </p>

                    <div
                      className={`mt-5 flex flex-wrap gap-2.5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.highlights.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
