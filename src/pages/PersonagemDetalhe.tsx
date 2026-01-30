import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { QuoteBlock } from "@/components/scrollytelling/QuoteBlock";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import characterMaria from "@/assets/character-maria.jpg";
import characterPedro from "@/assets/character-pedro.jpg";
import characterRaquel from "@/assets/character-raquel.jpg";

const personagens = {
  "maria-silva": {
    name: "Maria da Silva",
    age: 24,
    role: "Agricultora familiar",
    location: "Interior de Minas Gerais",
    image: characterMaria,
    quote: "A terra é minha raiz. Mesmo com as dificuldades, não consigo me imaginar em outro lugar.",
    bio: [
      "Maria cresceu na pequena propriedade da família, entre hortas, galinhas e o ritmo lento das estações. Filha e neta de agricultores, aprendeu desde cedo que a vida no campo exige trabalho duro, mas oferece recompensas que a cidade não pode dar.",
      "Aos 18 anos, como tantos jovens rurais, Maria foi tentada pela cidade. Passou um ano trabalhando em uma fábrica na região metropolitana de Belo Horizonte. A experiência foi transformadora — mas não da forma que esperava.",
      "'Na cidade, eu era só mais uma. Aqui, eu sou alguém. Conheço cada pedaço dessa terra, cada pessoa da comunidade. Isso não tem preço.'",
      "De volta ao sítio, Maria começou a implementar técnicas de agroecologia que aprendeu em cursos online. Hoje, além de produzir alimentos para a família, vende hortaliças orgânicas para restaurantes da cidade vizinha, negociando diretamente pelo WhatsApp.",
    ],
    dreams: "Quer expandir a produção orgânica e criar uma cooperativa com outras jovens agricultoras da região. Sonha em provar que é possível ter uma vida digna no campo.",
  },
  "pedro-oliveira": {
    name: "Pedro Oliveira",
    age: 22,
    role: "Filho de assentados",
    location: "Assentamento em Goiás",
    image: characterPedro,
    quote: "Estudei na cidade, mas voltei. Aqui posso aplicar o que aprendi e ajudar minha comunidade.",
    bio: [
      "Pedro nasceu em um assentamento da reforma agrária, onde seus pais construíram uma vida a partir de um lote de terra conquistado após anos de luta. A história de resistência da família moldou sua visão de mundo.",
      "Graças a uma bolsa de estudos, Pedro conseguiu cursar dois anos de Administração em uma universidade da capital. O plano inicial era conseguir um emprego na cidade e ajudar a família de longe.",
      "Mas durante a pandemia, quando voltou para o assentamento, Pedro percebeu que seus conhecimentos poderiam ter mais impacto ali mesmo. Começou a ajudar cooperativas locais a organizarem suas finanças e a venderem produtos pela internet.",
      "'A cidade tem muito a oferecer, mas o campo precisa de gente qualificada. Eu escolhi voltar porque acredito que posso fazer diferença aqui.'",
    ],
    dreams: "Quer criar uma incubadora de negócios rurais para ajudar jovens agricultores a empreenderem sem precisar deixar suas comunidades.",
  },
  "raquel-santos": {
    name: "Raquel Santos",
    age: 19,
    role: "Jovem quilombola",
    location: "Comunidade quilombola na Bahia",
    image: characterRaquel,
    quote: "Ser jovem e rural não é sobre ficar preso ao passado. É sobre construir um futuro diferente.",
    bio: [
      "Raquel cresceu em uma comunidade quilombola que há gerações preserva tradições, sementes crioulas e uma forma única de se relacionar com a terra. Para ela, ser rural é inseparável de ser quilombola — uma identidade que carrega história e resistência.",
      "Na escola da cidade mais próxima, Raquel frequentemente se sentia deslocada. O currículo não refletia sua realidade e alguns colegas faziam piadas sobre sua origem. Essas experiências a fizeram questionar se deveria esconder ou celebrar sua identidade.",
      "'Por muito tempo, eu tinha vergonha de dizer que era do quilombo. Hoje, tenho orgulho. Entendi que nossa história é de força, não de atraso.'",
      "Aos 19 anos, Raquel participa ativamente do movimento de juventude quilombola e usa as redes sociais para mostrar a riqueza cultural de sua comunidade. Seus vídeos sobre plantas medicinais e receitas tradicionais já alcançaram milhares de visualizações.",
    ],
    dreams: "Quer estudar Direito para defender os direitos territoriais de comunidades quilombolas e tradicionais. Sonha em um Brasil que respeite e valorize todos os seus povos.",
  },
};

export default function PersonagemDetalhe() {
  const { slug } = useParams();
  const personagem = slug ? personagens[slug as keyof typeof personagens] : null;

  if (!personagem) {
    return <Navigate to="/personagens" replace />;
  }

  return (
    <Layout>
      {/* Hero with large portrait */}
      <section className="min-h-screen relative">
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[60vh] md:h-auto order-1 md:order-2"
          >
            <img
              src={personagem.image}
              alt={personagem.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent md:hidden" />
          </motion.div>

          {/* Content */}
          <div className="flex items-center px-6 md:px-12 lg:px-20 py-12 order-2 md:order-1">
            <div className="max-w-lg">
              <Link
                to="/personagens"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={18} /> Voltar para personagens
              </Link>

              <FadeInText as="span" className="caption text-secondary mb-4 block">
                {personagem.location}
              </FadeInText>
              <FadeInText as="h1" delay={0.1} className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                {personagem.name}
              </FadeInText>
              <FadeInText as="p" delay={0.2} className="text-xl text-muted-foreground mb-6">
                {personagem.role}, {personagem.age} anos
              </FadeInText>
              <FadeInText as="p" delay={0.3} className="font-serif text-2xl italic text-secondary">
                "{personagem.quote}"
              </FadeInText>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-reading mx-auto prose-editorial">
          <FadeInText as="h2">A história</FadeInText>
          {personagem.bio.map((paragraph, index) => (
            <FadeInText key={index} as="p" delay={index * 0.1}>
              {paragraph}
            </FadeInText>
          ))}
        </div>
      </section>

      {/* Dreams */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-reading mx-auto text-center">
          <FadeInText as="h2" className="font-serif text-2xl md:text-3xl mb-6">
            Sonhos para o futuro
          </FadeInText>
          <FadeInText as="p" delay={0.1} className="text-lg text-muted-foreground">
            {personagem.dreams}
          </FadeInText>
        </div>
      </section>

      {/* Quote */}
      <QuoteBlock
        quote={personagem.quote}
        author={personagem.name}
        role={personagem.role}
      />
    </Layout>
  );
}
