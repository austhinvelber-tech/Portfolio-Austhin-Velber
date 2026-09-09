export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-tight flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Austhin. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#inicio"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
