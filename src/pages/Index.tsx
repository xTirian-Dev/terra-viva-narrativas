import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/scrollytelling/HeroSection";
import { ScrollSection } from "@/components/scrollytelling/ScrollSection";
import { ParallaxImage } from "@/components/scrollytelling/ParallaxImage";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { QuoteBlock } from "@/components/scrollytelling/QuoteBlock";
import { CharacterCard } from "@/components/cards/CharacterCard";
import { ReportCard } from "@/components/cards/ReportCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-rural.jpg";
import farmScene from "@/assets/farm-scene.jpg";
import landscapeAerial from "@/assets/landscape-aerial.jpg";
import characterMaria from "@/assets/character-maria.jpg";
import characterPedro from "@/assets/character-pedro.jpg";
import characterRaquel from "@/assets/character-raquel.jpg";

const characters = [
  {
    name: "Maria da Silva",
    role: "Agricultora familiar, 24 anos",
    quote: "A terra é minha raiz. Mesmo com as dificuldades, não consigo me imaginar em outro lugar.",
    image: characterMaria,
    slug: "maria-silva",
  },
  {
    name: "Pedro Oliveira",
    role: "Filho de assentados, 22 anos",
    quote: "Estudei na cidade, mas voltei. Aqui posso aplicar o que aprendi e ajudar minha comunidade.",
    image: characterPedro,
    slug: "pedro-oliveira",
  },
  {
    name: "Raquel Santos",
    role: "Jovem quilombola, 19 anos",
    quote: "Ser jovem e rural não é sobre ficar preso ao passado. É sobre construir um futuro diferente.",
    image: characterRaquel,
    slug: "raquel-santos",
  },
];

const reports = [
  {
    title: "Entre a roça e o celular: a conectividade que transforma",
    excerpt: "Como a chegada da internet em comunidades rurais está mudando a forma como jovens se relacionam com o campo e com o mundo.",
    image: farmScene,
    slug: "conectividade-rural",
    category: "Tecnologia",
  },
  {
    title: "Educação do campo: sonhos que não cabem na cidade",
    excerpt: "O desafio de escolas rurais em oferecer educação de qualidade e manter os jovens próximos de suas origens.",
    image: landscapeAerial,
    slug: "educacao-campo",
    category: "Educação",
  },
  {
    title: "Agroecologia como resistência: novas gerações, novas práticas",
    excerpt: "Jovens agricultores que estão reinventando a produção familiar com técnicas sustentáveis e inovadoras.",
    image: heroImage,
    slug: "agroecologia-resistencia",
    category: "Sustentabilidade",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Terra Rural"
        subtitle="Uma jornada pela identidade do jovem rural brasileiro. Entre raízes e horizontes, histórias de quem escolhe ficar — e de quem sonha partir."
        backgroundImage={heroImage}
        credit="Arquivo pessoal"
      />

      {/* Introduction */}
      <ScrollSection className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-reading mx-auto">
          <FadeInText as="p" className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
            No Brasil profundo, longe das luzes das grandes cidades, existe uma juventude que resiste, sonha e reinventa o significado de ser rural no século XXI.
          </FadeInText>
          <FadeInText as="p" delay={0.2} className="text-lg leading-relaxed">
            Esta reportagem multimídia mergulha nas histórias de jovens que vivem entre dois mundos: a tradição de suas famílias e a promessa de um futuro que nem sempre inclui a terra onde nasceram. São vozes que raramente ecoam nas narrativas sobre o Brasil contemporâneo, mas que carregam consigo a força de quem conhece o valor de cada amanhecer.
          </FadeInText>
        </div>
      </ScrollSection>

      {/* Parallax Break */}
      <ParallaxImage
        src={farmScene}
        alt="Fazenda rural brasileira ao amanhecer"
        className="h-[70vh] md:h-screen"
        overlay
      />

      {/* Context Section */}
      <ScrollSection className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-reading mx-auto">
          <FadeInText as="span" className="caption text-secondary mb-4 block">
            Contexto
          </FadeInText>
          <FadeInText as="h2" delay={0.1} className="font-serif text-3xl md:text-5xl mb-8">
            O êxodo silencioso
          </FadeInText>
          <FadeInText as="p" delay={0.2} className="text-lg leading-relaxed mb-6">
            A cada década, o campo brasileiro perde uma parcela significativa de seus jovens. Segundo dados do IBGE, a população rural diminuiu de 32% em 1991 para apenas 15% em 2022. Mas por trás das estatísticas frias, existem histórias complexas de pertencimento, abandono e recomeço.
          </FadeInText>
          <FadeInText as="p" delay={0.3} className="text-lg leading-relaxed">
            O que leva um jovem a deixar a terra de seus pais? E o que faz outros escolherem ficar, mesmo diante das adversidades? Esta reportagem busca respostas nessas perguntas, ouvindo quem vive essa realidade todos os dias.
          </FadeInText>
        </div>
      </ScrollSection>

      {/* Quote */}
      <QuoteBlock
        quote="Eu não quero ser só mais um número que foi embora. Quero provar que é possível ter uma vida digna no campo."
        author="Maria da Silva"
        role="Agricultora familiar, Minas Gerais"
      />

      {/* Characters Section */}
      <ScrollSection className="py-24 md:py-32 px-6 md:px-12 bg-muted/30">
        <div className="max-w-editorial mx-auto">
          <div className="text-center mb-16">
            <FadeInText as="span" className="caption text-secondary mb-4 block">
              Personagens
            </FadeInText>
            <FadeInText as="h2" delay={0.1} className="font-serif text-3xl md:text-5xl mb-4">
              Vozes do campo
            </FadeInText>
            <FadeInText as="p" delay={0.2} className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os jovens que dão rosto e voz a esta reportagem. Suas histórias revelam a diversidade e a complexidade da juventude rural brasileira.
            </FadeInText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {characters.map((character, index) => (
              <CharacterCard key={character.slug} {...character} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/personagens"
              className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all"
            >
              Ver todos os personagens <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ScrollSection>

      {/* Aerial Parallax */}
      <ParallaxImage
        src={landscapeAerial}
        alt="Vista aérea do campo brasileiro"
        className="h-[60vh] md:h-[80vh]"
      />

      {/* Reports Section */}
      <ScrollSection className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-editorial mx-auto">
          <div className="text-center mb-16">
            <FadeInText as="span" className="caption text-secondary mb-4 block">
              Reportagens
            </FadeInText>
            <FadeInText as="h2" delay={0.1} className="font-serif text-3xl md:text-5xl mb-4">
              Histórias que complementam
            </FadeInText>
            <FadeInText as="p" delay={0.2} className="text-muted-foreground max-w-2xl mx-auto">
              Aprofunde-se em temas específicos que atravessam a vida dos jovens rurais brasileiros.
            </FadeInText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {reports.map((report, index) => (
              <ReportCard key={report.slug} {...report} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reportagens"
              className="inline-flex items-center gap-2 text-secondary hover:gap-3 transition-all"
            >
              Explorar reportagens <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ScrollSection>

      {/* Final Quote */}
      <QuoteBlock
        quote="O campo não é o passado. É uma escolha de futuro."
        author="Pedro Oliveira"
        role="Assentado, Goiás"
      />

      {/* CTA Section */}
      <ScrollSection className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInText as="h2" className="font-serif text-3xl md:text-5xl mb-6">
            Conheça o projeto
          </FadeInText>
          <FadeInText as="p" delay={0.1} className="text-lg text-primary-foreground/80 mb-8">
            Esta grande reportagem é resultado de um Trabalho de Conclusão de Curso em Jornalismo. Descubra a metodologia, os objetivos e o autor por trás desta narrativa.
          </FadeInText>
          <FadeInText delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sobre-projeto" className="btn-editorial bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Sobre o Projeto
              </Link>
              <Link to="/sobre-autor" className="btn-editorial border border-primary-foreground/30 hover:bg-primary-foreground/10">
                Sobre o Autor
              </Link>
            </div>
          </FadeInText>
        </div>
      </ScrollSection>
    </Layout>
  );
}
