import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Austhin — Portfólio" },
      {
        name: "description",
        content:
          "Portfólio minimalista de Austhin. Designer e desenvolvedor criando experiências digitais com propósito.",
      },
      { property: "og:title", content: "Austhin — Portfólio" },
      {
        property: "og:description",
        content:
          "Portfólio minimalista de Austhin. Designer e desenvolvedor criando experiências digitais com propósito.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
