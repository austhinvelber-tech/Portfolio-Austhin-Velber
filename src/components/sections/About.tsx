const skills = [
  "CSS",
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
              Desenvolvedor em ascensão
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Olá! Meu nome é Austhin Velber, tenho 21 anos e sou um entusiasta
              da tecnologia em evolução constante.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Atualmente faço parte do programa Jovem Tech, onde estudo sobre as
              principais linguagens de programação, desenvolvo projetos e
              recebo capacitação para o mercado de trabalho.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Minha paixão por games e tecnologia me levou a descobrir o mundo
              da programação, que me ajudou a compreender melhor todo o
              processo de criação e desenvolvimento deles. Recentemente, comecei
              a me aprofundar no desenvolvimento Front-end, área que tem me
              atraído pela possibilidade de unir design e funcionalidade.
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
