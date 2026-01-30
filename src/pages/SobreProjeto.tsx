import { Layout } from "@/components/layout/Layout";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { ParallaxImage } from "@/components/scrollytelling/ParallaxImage";

import landscapeAerial from "@/assets/landscape-aerial.jpg";

export default function SobreProjeto() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-reading mx-auto">
          <FadeInText as="span" className="caption text-secondary mb-4 block">
            Sobre o Projeto
          </FadeInText>
          <FadeInText as="h1" delay={0.1} className="font-serif text-4xl md:text-6xl mb-6">
            A história por trás da reportagem
          </FadeInText>
          <FadeInText as="p" delay={0.2} className="text-xl text-muted-foreground">
            Este projeto nasceu da inquietação de contar histórias que muitas vezes ficam à margem do jornalismo mainstream.
          </FadeInText>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-reading mx-auto prose-editorial">
          <FadeInText as="h2">Contexto Acadêmico</FadeInText>
          <FadeInText as="p" delay={0.1}>
            <strong>Terra Rural</strong> é um Trabalho de Conclusão de Curso (TCC) desenvolvido para a graduação em Jornalismo. O projeto representa a culminação de anos de estudo sobre narrativas multimídia, jornalismo de imersão e a representação do Brasil rural na mídia contemporânea.
          </FadeInText>
          <FadeInText as="p" delay={0.15}>
            A escolha pelo formato de scrollytelling não é apenas estética: ela reflete uma busca por formas de contar histórias que respeitem a complexidade dos temas abordados, oferecendo ao leitor uma experiência imersiva que vai além do texto tradicional.
          </FadeInText>

          <FadeInText as="h2" delay={0.2}>Metodologia</FadeInText>
          <FadeInText as="p" delay={0.25}>
            A reportagem foi desenvolvida ao longo de 12 meses de trabalho intenso, dividido em três fases principais:
          </FadeInText>
          <FadeInText delay={0.3}>
            <ul className="space-y-3 my-6">
              <li>
                <strong>Pesquisa bibliográfica:</strong> Revisão de literatura sobre juventude rural, êxodo rural, políticas públicas para o campo e jornalismo multimídia.
              </li>
              <li>
                <strong>Trabalho de campo:</strong> Visitas a comunidades rurais em diferentes regiões do Brasil, com entrevistas em profundidade, registros fotográficos e documentação audiovisual.
              </li>
              <li>
                <strong>Produção multimídia:</strong> Curadoria e edição do material coletado, design da experiência digital e implementação técnica do projeto.
              </li>
            </ul>
          </FadeInText>

          <FadeInText as="h2" delay={0.35}>Objetivo Social e Comunicacional</FadeInText>
          <FadeInText as="p" delay={0.4}>
            Mais do que um exercício acadêmico, este projeto carrega uma missão: dar visibilidade às vozes que raramente encontram espaço nos grandes veículos de comunicação. A juventude rural brasileira enfrenta desafios únicos — do acesso limitado à educação e saúde até a pressão econômica que empurra famílias para fora de suas terras.
          </FadeInText>
          <FadeInText as="p" delay={0.45}>
            Ao contar essas histórias de forma sensível e imersiva, esperamos contribuir para um debate público mais informado sobre o futuro do campo brasileiro e as políticas necessárias para garantir que os jovens rurais tenham escolhas reais sobre seus destinos.
          </FadeInText>

          <FadeInText as="h2" delay={0.5}>Referências e Inspirações</FadeInText>
          <FadeInText as="p" delay={0.55}>
            Este projeto foi inspirado por grandes trabalhos de jornalismo narrativo e multimídia, incluindo:
          </FadeInText>
          <FadeInText delay={0.6}>
            <ul className="space-y-2 my-6">
              <li><em>Snow Fall</em> — The New York Times</li>
              <li>Reportagens especiais da <em>UOL TAB</em></li>
              <li>Especiais multimídia do <em>Nexo Jornal</em></li>
              <li>Documentários da série <em>Brazil in Transition</em></li>
            </ul>
          </FadeInText>
        </div>
      </section>

      {/* Parallax */}
      <ParallaxImage
        src={landscapeAerial}
        alt="Vista aérea do campo brasileiro"
        className="h-[50vh]"
      />

      {/* Timeline */}
      <section className="py-24 px-6 md:px-12 bg-muted/30">
        <div className="max-w-reading mx-auto">
          <FadeInText as="h2" className="font-serif text-3xl md:text-4xl mb-12 text-center">
            Cronograma do Projeto
          </FadeInText>
          
          <div className="space-y-8">
            {[
              { date: "Março 2025", title: "Início da pesquisa bibliográfica" },
              { date: "Maio 2025", title: "Primeiro trabalho de campo" },
              { date: "Agosto 2025", title: "Entrevistas em profundidade" },
              { date: "Novembro 2025", title: "Início da produção multimídia" },
              { date: "Fevereiro 2026", title: "Desenvolvimento do site" },
              { date: "Maio 2026", title: "Apresentação final e publicação" },
            ].map((item, index) => (
              <FadeInText key={item.date} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <span className="caption text-secondary block mb-1">{item.date}</span>
                    <p className="font-medium">{item.title}</p>
                  </div>
                </div>
              </FadeInText>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
