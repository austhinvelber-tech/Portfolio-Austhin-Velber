const skills = [
  "Design de Interfaces",
  "Desenvolvimento Web",
  "Identidade Visual",
  "Experiência do Usuário",
  "Prototipagem",
  "Motion Design",
];

export function About() {
  return (
    <section id="sobre" className="section-padding bg-paper">
      <div className="container-tight">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
              Sobre mim
            </p>
            <h2 className="text-balance text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Transformando ideias em experiências visuais refinadas
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sou um criativo multidisciplinar que acredita no poder do design
              minimalista para comunicar com clareza. Cada projeto é uma
              oportunidade de unir estética e funcionalidade, criando soluções
              que não apenas parecem bonitas, mas também resolvem problemas
              reais.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Com anos de experiência trabalhando com marcas, startups e
              agências, desenvolvi um olhar apurado para detalhes, tipografia,
              espaço em branco e hierarquia visual.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2 text-center text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
