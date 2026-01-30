import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/scrollytelling/HeroSection";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { QuoteBlock } from "@/components/scrollytelling/QuoteBlock";
import { ParallaxImage } from "@/components/scrollytelling/ParallaxImage";
import { VideoEmbed } from "@/components/media/VideoEmbed";
import { ImageGallery } from "@/components/media/ImageGallery";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import heroImage from "@/assets/hero-rural.jpg";
import farmScene from "@/assets/farm-scene.jpg";
import landscapeAerial from "@/assets/landscape-aerial.jpg";
import characterMaria from "@/assets/character-maria.jpg";
import characterPedro from "@/assets/character-pedro.jpg";
import characterRaquel from "@/assets/character-raquel.jpg";

const reportagens = {
  "conectividade-rural": {
    title: "Entre a roça e o celular: a conectividade que transforma",
    subtitle: "Como a chegada da internet em comunidades rurais está mudando a forma como jovens se relacionam com o campo e com o mundo",
    category: "Tecnologia",
    heroImage: farmScene,
    content: [
      {
        type: "text",
        content: "Em uma pequena propriedade no interior de Minas Gerais, Maria da Silva começa seu dia conferindo a previsão do tempo no smartphone. Há cinco anos, essa cena seria impensável. A chegada do sinal 4G à comunidade não apenas conectou os moradores ao mundo digital, mas transformou profundamente a forma como os jovens se relacionam com o trabalho no campo.",
      },
      {
        type: "text",
        content: "O Brasil rural está vivendo uma revolução silenciosa. Segundo dados da Anatel, a cobertura de internet móvel em áreas rurais passou de 43% em 2018 para 72% em 2024. Esse avanço, embora ainda insuficiente, está criando novas possibilidades para uma geração que cresceu vendo seus pais isolados das oportunidades que a cidade oferecia.",
      },
      {
        type: "quote",
        quote: "Antes, para vender nossa produção, dependíamos do atravessador. Hoje, negocio direto pelo WhatsApp com restaurantes da cidade.",
        author: "Maria da Silva",
        role: "Agricultora familiar",
      },
      {
        type: "text",
        content: "A tecnologia está mudando não apenas a comercialização, mas também as técnicas de produção. Aplicativos de monitoramento climático, tutoriais sobre agroecologia no YouTube e grupos de WhatsApp para troca de experiências entre agricultores estão criando uma nova forma de fazer agricultura familiar.",
      },
      {
        type: "gallery",
        images: [
          { src: characterMaria, alt: "Jovem agricultora", caption: "Maria confere informações no celular" },
          { src: farmScene, alt: "Propriedade rural", caption: "A pequena propriedade da família Silva" },
          { src: landscapeAerial, alt: "Vista aérea", caption: "Vista da comunidade rural" },
        ],
      },
      {
        type: "text",
        content: "Mas a conectividade também traz desafios. O acesso a redes sociais e ao estilo de vida urbano alimenta, em muitos jovens, o desejo de migrar para as cidades. A exposição constante a padrões de consumo e oportunidades aparentemente inacessíveis no campo cria uma tensão entre pertencimento e aspiração.",
      },
      {
        type: "parallax",
        image: landscapeAerial,
        alt: "Paisagem rural",
      },
      {
        type: "text",
        content: "Para Pedro Oliveira, 22 anos, a internet foi o que permitiu que ele voltasse. Após dois anos estudando na capital, ele usa seus conhecimentos de marketing digital para ajudar cooperativas locais a venderem seus produtos online. 'A tecnologia me deu ferramentas para fazer aqui o que eu faria na cidade', diz.",
      },
      {
        type: "quote",
        quote: "O campo do futuro é conectado. Não precisamos mais escolher entre internet e terra.",
        author: "Pedro Oliveira",
        role: "Empreendedor rural",
      },
    ],
  },
  "educacao-campo": {
    title: "Educação do campo: sonhos que não cabem na cidade",
    subtitle: "O desafio de escolas rurais em oferecer educação de qualidade e manter os jovens próximos de suas origens",
    category: "Educação",
    heroImage: landscapeAerial,
    content: [
      {
        type: "text",
        content: "Às seis da manhã, quando o sol ainda rasga o horizonte, dezenas de crianças e adolescentes já estão nos pontos de ônibus improvisados às margens de estradas de terra. Algumas viajam mais de uma hora para chegar à escola mais próxima. Essa é a realidade de milhões de estudantes rurais no Brasil.",
      },
      {
        type: "text",
        content: "O fechamento de escolas rurais é um fenômeno que se intensificou nas últimas décadas. Segundo o Censo Escolar, mais de 80 mil escolas rurais foram fechadas entre 2002 e 2022. As justificativas variam — desde a diminuição da população rural até a alegada inviabilidade econômica de manter estruturas para poucos alunos.",
      },
      {
        type: "quote",
        quote: "Quando fecharam a escola da comunidade, muitas famílias foram embora. A escola era o coração do lugar.",
        author: "Raquel Santos",
        role: "Estudante quilombola",
      },
      {
        type: "text",
        content: "O impacto vai além do acesso à educação. Escolas rurais funcionam como centros comunitários, espaços de encontro e preservação da cultura local. Seu fechamento acelera o esvaziamento das comunidades e enfraquece os laços sociais que sustentam a vida no campo.",
      },
    ],
  },
  "agroecologia-resistencia": {
    title: "Agroecologia como resistência: novas gerações, novas práticas",
    subtitle: "Jovens agricultores que estão reinventando a produção familiar com técnicas sustentáveis e inovadoras",
    category: "Sustentabilidade",
    heroImage: heroImage,
    content: [
      {
        type: "text",
        content: "Em meio à expansão do agronegócio e à pressão por produtividade a qualquer custo, um movimento silencioso ganha força nas pequenas propriedades do Brasil rural. Jovens agricultores estão redescobrindo práticas ancestrais e combinando-as com conhecimentos científicos para criar uma agricultura que respeita a terra.",
      },
      {
        type: "text",
        content: "A agroecologia não é apenas uma técnica de produção — é uma filosofia de vida. Para seus praticantes, a saúde do solo, a preservação da biodiversidade e o bem-estar das comunidades são tão importantes quanto a produtividade. Em um mundo cada vez mais preocupado com as mudanças climáticas, essas práticas ganham relevância inédita.",
      },
      {
        type: "quote",
        quote: "Meu avô produzia assim, sem químicos, respeitando o tempo da terra. Eu apenas trouxe ciência para o que ele já sabia.",
        author: "Maria da Silva",
        role: "Agricultora agroecológica",
      },
      {
        type: "gallery",
        images: [
          { src: characterMaria, alt: "Agricultora", caption: "Maria em sua horta agroecológica" },
          { src: characterPedro, alt: "Agricultor", caption: "Pedro mostra técnicas de compostagem" },
          { src: characterRaquel, alt: "Jovem quilombola", caption: "Raquel preserva sementes crioulas" },
        ],
      },
      {
        type: "text",
        content: "Os desafios são enormes. A falta de assistência técnica especializada, o acesso limitado a mercados que valorizam produtos orgânicos e a resistência de parte da comunidade dificultam a transição. Mas os resultados animadores — solos mais férteis, água mais limpa, alimentos mais saudáveis — convencem cada vez mais famílias.",
      },
    ],
  },
};

export default function ReportagemDetalhe() {
  const { slug } = useParams();
  const reportagem = slug ? reportagens[slug as keyof typeof reportagens] : null;

  if (!reportagem) {
    return <Navigate to="/reportagens" replace />;
  }

  return (
    <Layout>
      <HeroSection
        title={reportagem.title}
        subtitle={reportagem.subtitle}
        backgroundImage={reportagem.heroImage}
      />

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-reading mx-auto">
          <Link
            to="/reportagens"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} /> Voltar para reportagens
          </Link>

          <span className="caption text-secondary mb-8 block">
            {reportagem.category}
          </span>

          <div className="prose-editorial">
            {reportagem.content.map((block, index) => {
              if (block.type === "text") {
                return (
                  <FadeInText key={index} as="p" delay={index * 0.05}>
                    {block.content}
                  </FadeInText>
                );
              }
              if (block.type === "quote") {
                return (
                  <QuoteBlock
                    key={index}
                    quote={block.quote}
                    author={block.author}
                    role={block.role}
                  />
                );
              }
              if (block.type === "gallery" && block.images) {
                return <ImageGallery key={index} images={block.images} columns={3} />;
              }
              if (block.type === "parallax" && block.image) {
                return (
                  <div key={index} className="full-bleed my-16">
                    <ParallaxImage
                      src={block.image}
                      alt={block.alt || ""}
                      className="h-[60vh]"
                    />
                  </div>
                );
              }
              if (block.type === "video" && block.src) {
                return (
                  <VideoEmbed
                    key={index}
                    src={block.src}
                    title={block.title || ""}
                    caption={block.caption}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
