import { Layout } from "@/components/layout/Layout";
import { FadeInText } from "@/components/scrollytelling/FadeInText";
import { Instagram, Linkedin, Mail, FileText } from "lucide-react";

export default function SobreAutor() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-editorial mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo placeholder */}
            <FadeInText>
              <div className="aspect-square bg-muted rounded-sm flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Foto do autor</span>
              </div>
            </FadeInText>

            {/* Bio */}
            <div>
              <FadeInText as="span" className="caption text-secondary mb-4 block">
                Sobre o Autor
              </FadeInText>
              <FadeInText as="h1" delay={0.1} className="font-serif text-4xl md:text-5xl mb-6">
                Nome do Jornalista
              </FadeInText>
              <FadeInText as="p" delay={0.2} className="text-lg text-muted-foreground mb-6">
                Estudante de Jornalismo apaixonado por narrativas que revelam o Brasil profundo. Com interesse especial em jornalismo multimídia, documentário e reportagens de longo formato.
              </FadeInText>
              <FadeInText delay={0.3}>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                    aria-label="Currículo Lattes"
                  >
                    <FileText size={20} />
                  </a>
                </div>
              </FadeInText>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Bio */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-reading mx-auto prose-editorial">
          <FadeInText as="h2">Formação Acadêmica</FadeInText>
          <FadeInText as="p" delay={0.1}>
            Graduando em Jornalismo pela [Nome da Universidade], com previsão de conclusão em junho de 2026. Durante a graduação, desenvolveu interesse especial por jornalismo rural, narrativas multimídia e documentário.
          </FadeInText>
          <FadeInText as="p" delay={0.15}>
            Participou de projetos de extensão voltados para comunicação comunitária e foi bolsista de iniciação científica em projeto sobre representações da ruralidade na mídia brasileira.
          </FadeInText>

          <FadeInText as="h2" delay={0.2}>Experiência Profissional</FadeInText>
          <FadeInText delay={0.25}>
            <ul className="space-y-4 my-6">
              <li>
                <strong>Estágio em Redação</strong> — Veículo de comunicação local (2024-2025)
                <p className="text-muted-foreground mt-1">Produção de pautas, reportagens e cobertura de eventos regionais.</p>
              </li>
              <li>
                <strong>Projeto de Extensão</strong> — Comunicação Comunitária (2023-2024)
                <p className="text-muted-foreground mt-1">Produção de conteúdo para rádios comunitárias e jornais de bairro.</p>
              </li>
              <li>
                <strong>Iniciação Científica</strong> — Ruralidade e Mídia (2023)
                <p className="text-muted-foreground mt-1">Pesquisa sobre representações do campo brasileiro na imprensa nacional.</p>
              </li>
            </ul>
          </FadeInText>

          <FadeInText as="h2" delay={0.3}>Motivação para o Projeto</FadeInText>
          <FadeInText as="p" delay={0.35}>
            "Cresci entre a cidade e o interior, visitando avós que mantinham uma pequena propriedade rural. Essa experiência me marcou profundamente e despertou um interesse genuíno pelas histórias de quem vive da terra.
          </FadeInText>
          <FadeInText as="p" delay={0.4}>
            Ao longo da graduação, percebi como o campo brasileiro é frequentemente retratado de forma estereotipada ou simplesmente ignorado pela grande mídia. Este TCC é minha tentativa de contribuir para uma narrativa mais justa e complexa sobre a juventude rural — pessoas que, assim como eu, estão tentando entender seu lugar no mundo."
          </FadeInText>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="max-w-reading mx-auto text-center">
          <FadeInText as="h2" className="font-serif text-3xl mb-4">
            Entre em contato
          </FadeInText>
          <FadeInText as="p" delay={0.1} className="text-primary-foreground/80 mb-8">
            Quer saber mais sobre o projeto ou conversar sobre jornalismo multimídia? Envie uma mensagem.
          </FadeInText>
          <FadeInText delay={0.2}>
            <a
              href="mailto:contato@exemplo.com"
              className="btn-editorial bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              contato@exemplo.com
            </a>
          </FadeInText>
        </div>
      </section>
    </Layout>
  );
}
