import { Layout } from "@/components/layout/Layout";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { ReportCard } from "@/components/cards/ReportCard";

import heroImage from "@/assets/hero-rural.jpg";
import farmScene from "@/assets/farm-scene.jpg";
import landscapeAerial from "@/assets/landscape-aerial.jpg";

const reports = [
  {
    title: "Entre a roça e o celular: a conectividade que transforma",
    excerpt: "Como a chegada da internet em comunidades rurais está mudando a forma como jovens se relacionam com o campo e com o mundo. A tecnologia que antes parecia distante agora faz parte do cotidiano agrícola.",
    image: farmScene,
    slug: "conectividade-rural",
    category: "Tecnologia",
  },
  {
    title: "Educação do campo: sonhos que não cabem na cidade",
    excerpt: "O desafio de escolas rurais em oferecer educação de qualidade e manter os jovens próximos de suas origens. Uma análise sobre as políticas públicas e seus impactos nas comunidades.",
    image: landscapeAerial,
    slug: "educacao-campo",
    category: "Educação",
  },
  {
    title: "Agroecologia como resistência: novas gerações, novas práticas",
    excerpt: "Jovens agricultores que estão reinventando a produção familiar com técnicas sustentáveis e inovadoras. Histórias de quem transformou a luta ambiental em modo de vida.",
    image: heroImage,
    slug: "agroecologia-resistencia",
    category: "Sustentabilidade",
  },
];

export default function Reportagens() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-editorial mx-auto">
          <FadeInText as="span" className="caption text-secondary mb-4 block">
            Reportagens
          </FadeInText>
          <FadeInText as="h1" delay={0.1} className="font-serif text-4xl md:text-6xl mb-6">
            Histórias que aprofundam
          </FadeInText>
          <FadeInText as="p" delay={0.2} className="text-xl text-muted-foreground max-w-2xl">
            Reportagens complementares que exploram temas específicos da vida no campo brasileiro. Cada história é uma janela para a complexa realidade da juventude rural.
          </FadeInText>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-editorial mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {reports.map((report, index) => (
              <ReportCard key={report.slug} {...report} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-reading mx-auto text-center">
          <FadeInText as="h2" className="font-serif text-2xl md:text-3xl mb-4">
            Mais reportagens em breve
          </FadeInText>
          <FadeInText as="p" delay={0.1} className="text-muted-foreground">
            Este projeto está em constante desenvolvimento. Novas histórias e perspectivas serão adicionadas antes da publicação final.
          </FadeInText>
        </div>
      </section>
    </Layout>
  );
}
