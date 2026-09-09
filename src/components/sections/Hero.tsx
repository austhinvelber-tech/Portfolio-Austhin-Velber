import heroImage from "@/assets/hero-portfolio.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover opacity-30"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container-tight text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
          Portfólio
        </p>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Criando experiências digitais com{" "}
          <span className="font-medium">propósito</span> e{" "}
          <span className="font-medium">minimalismo</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
          Designer e desenvolvedor focado em construir interfaces limpas,
          funcionais e memoráveis para marcas que querem se destacar.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Entre em contato
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-8 py-3.5 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-background hover:border-foreground/20"
          >
            Conheça meu trabalho
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#sobre"
          aria-label="Rolar para baixo"
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border pt-2 transition-colors hover:border-foreground/30"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-foreground/60" />
        </a>
      </div>
    </section>
  );
}
