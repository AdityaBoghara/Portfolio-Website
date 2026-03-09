const experiences = [
  {
    period: "Jan 2025 — Present",
    role: "Instructional Assistant – Business Application Management",
    company: "University of Houston",
    description:
      "Support database and business application coursework by assisting with lectures, guiding students through database concepts, and grading technical assignments while improving student understanding of relational systems.",
    technologies: [
      "SQL",
      "Database Systems",
      "Business Applications",
      "Teaching",
      "Data Management",
    ],
    current: true,
  },
  {
    period: "Dec 2023 — Apr 2024",
    role: "Backend Developer",
    company: "Human City Project",
    description:
      "Designed scalable MongoDB schemas and built backend architecture for a cross-platform MERN application, improving database performance and enabling seamless integration across web and mobile systems.",
    technologies: [
      "MongoDB",
      "Node.js",
      "MERN Stack",
      "API Development",
      "GitHub Codespaces",
    ],
    current: false,
  },
  {
    period: "Jan 2023 — May 2023",
    role: "Application Developer",
    company: "Arizona State University",
    description:
      "Developed and enhanced academic applications for faculty research projects, improving application functionality and system reliability for student and instructor usage.",
    technologies: [
      "JavaScript",
      "Application Development",
      "Software Engineering",
    ],
    current: false,
  },
  {
    period: "May 2022 — May 2023",
    role: "Technology Consultant",
    company: "Arizona State University",
    description:
      "Provided real-time technical support for large-scale synchronous learning environments, troubleshooting classroom technology and maintaining live lecture systems used by thousands of students.",
    technologies: [
      "Zoom",
      "AV Systems",
      "IT Support",
      "System Troubleshooting",
    ],
    current: false,
  },
  {
    period: "Aug 2022 — Dec 2022",
    role: "Undergraduate Teaching Assistant",
    company: "Ira A. Fulton Schools of Engineering, ASU",
    description:
      "Mentored students and supported engineering faculty by facilitating labs, conducting study sessions, and assisting with technical coursework and collaborative learning activities.",
    technologies: ["Teaching", "Programming Support", "Student Mentorship"],
    current: false,
  },
  {
    period: "May 2021 — Aug 2021",
    role: "XR Creative Developer",
    company: "Meteor Studio at Arizona State University",
    description:
      "Developed immersive XR learning environments using Unity and WebVR frameworks as part of a digital twin project focused on next-generation educational platforms.",
    technologies: ["Unity", "AFRAME", "Blender", "Maya", "XR Development"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-[-8rem] top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-slow-drift" />
      <div className="absolute right-[-6rem] bottom-12 h-72 w-72 rounded-full bg-highlight/10 blur-3xl animate-slow-drift" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <span className="animate-fade-in text-sm font-medium uppercase tracking-wider text-secondary-foreground">
            Career Journey
          </span>

          <h2 className="mt-4 mb-6 animate-fade-in animation-delay-100 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Experience that{" "}
            <span className="font-serif font-normal italic text-gradient">
              speaks volumes.
            </span>
          </h2>

          <p className="animate-fade-in animation-delay-200 max-w-2xl leading-7 text-muted-foreground">
            A timeline of academic, technical, and collaborative roles that
            shaped my foundation across software engineering, data systems, and
            applied technology.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid gap-8 animate-fade-in md:grid-cols-2"
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
              >
                <div className="absolute left-0 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2">
                  {exp.current && (
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
                      {exp.period}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {exp.description}
                    </p>

                    <div
                      className={`mt-5 flex flex-wrap gap-2.5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                        >
                          {tech}
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
