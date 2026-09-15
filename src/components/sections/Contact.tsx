import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Austhinvelber@Gmail.com",
    href: "mailto:Austhinvelber@Gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(98) 98584-0596",
    href: "tel:+5598985840596",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Luís - MA",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contato" className="section-padding">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
            Contato
          </p>
          <h2 className="text-balance text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Vamos criar algo incrível juntos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tem um projeto em mente? Adoraria ouvir sobre ele. Entre em contato
            e vamos conversar sobre como posso ajudar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-foreground/20 hover:bg-secondary hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="mt-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {item.label}
              </span>
              <span className="mt-1 text-lg font-medium text-foreground">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
