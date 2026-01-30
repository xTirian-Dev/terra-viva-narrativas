import { Layout } from "@/components/layout/Layout";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { CharacterCard } from "@/components/cards/CharacterCard";

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

export default function Personagens() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-editorial mx-auto">
          <FadeInText as="span" className="caption text-secondary mb-4 block">
            Personagens
          </FadeInText>
          <FadeInText as="h1" delay={0.1} className="font-serif text-4xl md:text-6xl mb-6">
            Vozes do campo
          </FadeInText>
          <FadeInText as="p" delay={0.2} className="text-xl text-muted-foreground max-w-2xl">
            Por trás das estatísticas sobre êxodo rural e agricultura familiar, existem rostos, histórias e sonhos. Conheça os jovens que dão vida a esta reportagem.
          </FadeInText>
        </div>
      </section>

      {/* Characters Grid */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-editorial mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {characters.map((character, index) => (
              <CharacterCard key={character.slug} {...character} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-reading mx-auto text-center">
          <FadeInText as="p" className="text-muted-foreground italic">
            Todos os nomes e algumas informações foram alterados para preservar a identidade dos entrevistados. As histórias, no entanto, são reais e foram coletadas durante o trabalho de campo realizado entre 2025 e 2026.
          </FadeInText>
        </div>
      </section>
    </Layout>
  );
}
