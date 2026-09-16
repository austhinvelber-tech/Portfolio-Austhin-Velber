import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Projeto em breve",
    description: "Em desenvolvimento. Novidade chegando aqui em breve.",
    tags: ["Front-end", "Web"],
    link: "https://github.com/austhinvelber-tech/hero-contact-page",
  },
  {
    title: "Projeto em breve",
    description: "Em desenvolvimento. Novidade chegando aqui em breve.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "",
  },
  {
    title: "Projeto em breve",
    description: "Em desenvolvimento. Novidade chegando aqui em breve.",
    tags: ["Design", "Web"],
    link: "",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
            Projetos
          </p>
          <h2 className="text-balance text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trabalhos em desenvolvimento
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Alguns dos projetos que estou construindo enquanto aprimoro minhas
            habilidades.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || undefined}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:bg-secondary hover:shadow-lg hover:shadow-foreground/5"
            >
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link ? (
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-terracotta transition-colors group-hover:text-foreground">
                  Ver projeto
                  <ExternalLink className="size-4" aria-hidden="true" />
                </span>
              ) : (
                <span className="mt-8 text-sm text-muted-foreground">
                  Link em breve
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
