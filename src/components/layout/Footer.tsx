import { Link } from "react-router-dom";
import { Instagram, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12">
      <div className="max-w-editorial mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Terra Rural</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Uma grande reportagem multimídia sobre a identidade do jovem rural brasileiro.
              Trabalho de Conclusão de Curso em Jornalismo.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-background/50">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/reportagens" className="text-background/70 hover:text-background transition-colors">
                  Reportagens
                </Link>
              </li>
              <li>
                <Link to="/personagens" className="text-background/70 hover:text-background transition-colors">
                  Personagens
                </Link>
              </li>
              <li>
                <Link to="/sobre-projeto" className="text-background/70 hover:text-background transition-colors">
                  O Projeto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-background/50">
              Contato
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-background/20 rounded-full hover:bg-background/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 border border-background/20 rounded-full hover:bg-background/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 border border-background/20 rounded-full hover:bg-background/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Terra Rural. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm">
            Trabalho de Conclusão de Curso — Jornalismo
          </p>
        </div>
      </div>
    </footer>
  );
}
